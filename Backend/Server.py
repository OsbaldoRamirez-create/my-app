from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import os
from email.utils import formataddr
from whitenoise import WhiteNoise
from pathlib import Path
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import redis

loaded = load_dotenv()
BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_BUILD = BASE_DIR / 'build' 

app = Flask(__name__, static_folder=str(FRONTEND_BUILD))
app.wsgi_app = WhiteNoise(app.wsgi_app, root=str(FRONTEND_BUILD))
print(f"Static folder resolved to: {os.path.abspath(app.static_folder)}")
CORS(app)


REDIS_URL= os.getenv('REDISCLOUD_URL')


#initialize Redis client
redis_client = redis.Redis.from_url(REDIS_URL)
# Redis connection


limiter = Limiter(
    app = app,
    key_func=get_remote_address,
    storage_uri=REDIS_URL
)

EMAIL_ADDRESS = os.getenv('EMAIL_ADDRESS')


@app.errorhandler(429)
def ratelimit_handler(e):
    return jsonify({
        'error': 'Rate Limited Exceeded',
        'message':f"You've hit the limit:[e.description]. Try again later"}), 429


# Serve static files from the React app
@app.route('/', defaults={'path':''} )
@app.route('/<path:path>')
def catch(path):
    full_path = os.path.join(app.static_folder, path)
    if path != "" and os.path.isfile(full_path):
        return send_from_directory(app.static_folder, path)
    print(f"Serving index.html for path: {path}")
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/send-quote', methods=['POST'])
@limiter.limit("4 per day; 1 per minute") #limit for form only
def send_quote():
    data = request.get_json()

    name = data.get('name')
    phone = data.get('phone')   
    email = data.get('email')
    subject = data.get('subject')
    description = data.get('description')

    if not all([name, phone, email, subject, description]):
        return jsonify({'message': 'missing data'}), 400

    email_subject = f"Quote Request from {name} for {subject}"

    email_body =Mail(
    from_email=EMAIL_ADDRESS,
    to_emails=EMAIL_ADDRESS,
    subject=email_subject,
    html_content=f"""
    <p>Name: {name}</p>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
    <p>Subject: {subject}</p>
    <p>Message: {description}</p>
    """ )
    try:
        #Send email using SendGrid
        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        response = sg.send(email_body)
        app.logger.info(f"Succesfully sent email from {formataddr((name, email))}")
        return jsonify({
            'message': f"Successfully sent quote! We'll get back to you soon"}), 200
    except Exception as e:
        app.logger.error(f"Error sending email: {str(e)}")
        if hasattr(e, 'body'):
            app.logger.error(f"Sendgrid Error body: {e.body}")
        if hasattr(e, 'headers'):
            app.logger.error(f"Sendgrid Error headers: {e.headers}")
        return jsonify ({'error': str(e)}), 500

''' Send emails using SMTP Example 
    body = f"Name: {name}\nPhone: {phone}\nEmail: {email}\nSubject: {subject}\nMessage: {description}"
    msg = MIMEText(body)
    msg['Subject'] = f"Quote Request from {name} for {subject}" 
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = EMAIL_ADDRESS

    # Send email
    try:
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            if EMAIL_USE_TLS:
                server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)

        app.logger.info(f"Succesfully sent email from {formataddr((name, email))}")
        #print(data)
        return jsonify({
            'message': f"Successfully sent quote! We'll get back to you soon"}), 200

    except Exception as e:
        app.logger.error(f"Error sending email: {str(e)}")
        return jsonify({'message': f'Failed to send quote. Try again later',
                'error': str(e)
        }), 500
'''    


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
#    debug = false for production, true for development
    app.run( host='0.0.0.0', debug=False , port=port)
