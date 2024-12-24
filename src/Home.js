import React from 'react'
import RamirezLogo from './Images/RamirezLogo.png';
import './Styles/HomeStyles.css';

export default function Home() {
  return (
    <div className='main-home'> 
        <img src={RamirezLogo} className="ramirezLogo"alt="Logo"/>
        <div className="intro">
        <div className="intro-boxes">
            <h3>Who are we?</h3>
            <p>
                Ramirez Landscaping is a family owned and operated business proudly serving Redwood City and all of the bay area for over 15 years. 
                As a full landscaping company, we are passionate about bringing your vision to life. We will work closely with you to ensure each 
                project is completed as you imagined. We take pride in our attention to detail and our bendable focus on customer satisfaction.
            </p>
        </div>
        <div className="intro-boxes">
            <h3>What do we do?</h3>
            <p>
                Our reputation is built on providing the best maintenace services, ensuring that your property always looks its best.
                Whether you require weekly, bi-weekly, or monthly services, you will notice the amazing work done once our team leaves your property.
                We offer a large selection of services that doesnt only include regular yard maintenance, but also a variety of landscaping projects.

            </p>
        </div>
    </div>
    
     </div>
  )
}
