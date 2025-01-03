import React from 'react'
import RamirezLogo from './Images/RamirezLogo.png';
import grassImg from './Images/NewGrass2.png';
import patioImg from './Images/cleanerPatio.png';
import './Styles/HomeStyles.css';
import Slideshow from './Components/Slideshow';

export default function Home() {
  return (
    <div className='main-home'> 
        <img src={RamirezLogo} className="ramirezLogo"alt="Logo"/>
        <Slideshow/>
        <div className="intro">
        <div className="intro-boxes">
            <h2>Who are we?</h2>
            <p>
                Ramirez Landscaping is a family owned and operated business proudly serving Redwood City and all of the bay area for over 15 years. 
                As a full landscaping company, we are passionate about bringing your vision to life. We will work closely with you to ensure each 
                project is completed as you imagined. We take pride in our attention to detail and our bendable focus on customer satisfaction.
            </p>
        </div>
        <div className="intro-boxes">
            <h2>What do we do?</h2>
            <p>
                Our reputation is built on providing the best maintenace services, ensuring that your property always looks its best.
                Whether you require weekly, bi-weekly, or monthly services, you will notice the amazing work done once our team leaves your property.
                We offer a large selection of services that doesnt only include regular yard maintenance, but also a variety of landscaping projects.

            </p>
        </div>
    </div>
    
    <div class="content">
        <div class="boxes-container">
            <h3>Maintenance</h3>
            <div class="info-box">
                <img src ={grassImg} alt = "Yard Maintenance"/>
            </div>
            <button onclick="window.location.href ='/maintenance-page.html';" > More</button>
        </div>  
          
        <div class="boxes-container">
            <h3>Landscaping</h3>
            <div class="info-box">
                <img src ={patioImg }alt = "Landscaping Services"/>    
            </div>
            <button onclick="window.location.href ='/landscaping-page.html';" > More</button>
        </div>
        
    </div>

    <div class="quote-container">
        <h1> Request a Consultation</h1>
        <form id="landscaping-form">
            <div class="input-container">
                <div class="form-class">
                    <input type="text" id="name" name="name" placeholder="Name*" required/>
                </div>
                <div class="form-class">
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number*" required/>
                </div>
                <div class="form-class">
                    <input type="email" id="email" name="email" placeholder="Email*" required/>
                </div>
                <div class="form-class">
                    <input type="text" id="subject" name="subject" placeholder="Subject*" required/>
                    <h4> *Free quotes only in the Bay Area CA all other locations subject to a fee depending on location</h4> 
                </div>
                </div>
            <div class="description-container">
                <div class="form-class">
                    <textarea id="description" name="description" placeholder="Description:"></textarea>
                </div>
            </div>
        <div class="btn-container">
        <button type="submit"> Submit</button>
        </div>
    </form>
    </div>
    
     </div>
  )
}
