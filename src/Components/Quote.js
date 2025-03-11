import React, { useState } from 'react'
import '../Styles/QuoteStyles.css';

export default function Quote() {
    const [formData, setFormData] = useState({name: '', phone: '', subject: '', email: '', description: ''});
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/send-quote', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if(response.ok){
                alert('Your quote was sent successfully!');
                //clear form
                setFormData({name: '', phone: '', email: '', subject:'', description: ''});
            }
            else{
                alert(result.error);
            }
        }
        catch(error){
                alert('An error occurred. Please try again later.');
            }
    };



  return (
<div className="quote-container">
        <h1> Request a Consultation</h1>
        <form id="landscaping-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <div className="form-class">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" required/>
                </div>
                <div className="form-class">
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number*" required/>
                </div>
                <div className="form-class">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required/>
                </div>
                <div className="form-class">
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject*" required/>
                    <h4> *Free quotes only in the Bay Area CA all other locations subject to a fee depending on location</h4> 
                </div>
                </div>
            <div className="description-container">
                <div className="form-class">
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Description:"></textarea>
                </div>
            </div>
        <div className="btn-container">
        <button type="submit"> Submit</button>
        </div>
    </form>
    </div>  
    )
}

