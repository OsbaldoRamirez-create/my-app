import React from 'react'

export default function Quote() {
  return (
<div className="quote-container">
        <h1> Request a Consultation</h1>
        <form id="landscaping-form">
            <div className="input-container">
                <div className="form-class">
                    <input type="text" id="name" name="name" placeholder="Name*" required/>
                </div>
                <div className="form-class">
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number*" required/>
                </div>
                <div className="form-class">
                    <input type="email" id="email" name="email" placeholder="Email*" required/>
                </div>
                <div className="form-class">
                    <input type="text" id="subject" name="subject" placeholder="Subject*" required/>
                    <h4> *Free quotes only in the Bay Area CA all other locations subject to a fee depending on location</h4> 
                </div>
                </div>
            <div className="description-container">
                <div className="form-class">
                    <textarea id="description" name="description" placeholder="Description:"></textarea>
                </div>
            </div>
        <div className="btn-container">
        <button type="submit"> Submit</button>
        </div>
    </form>
    </div>  
    )
}

