import React from 'react'
import Quote from './Components/Quote'
import RamirezLogo from './Images/RamirezLogo.png';
import './Styles/LandscapingStyles.css';


export default function LandscapingPage() {
  return (
    <div className='main-landscaping'>
    <img src={RamirezLogo} className="ramirezLogo"alt="Logo"/>
        
    <div className='landscaping-info'>
        <h1> Landscaping Services </h1>
        <p> When transforming your yard it takes a great and trustable team to complete the project as you imagined it.</p>


    </div>
    <div className='landscaping-services'>
            <h2> Services Offered</h2>
            <div className='services'>
                <ul>  
                  
                  <li> Fencing</li>
                  <li> Irrigation Systems</li>
                  <li> Tree Work</li>
                  <li> Fruit Trees & Small Planting</li>
                  <li> Sod Installation</li>
                  <li> Pavers and Bricks</li>
                  <li> Garden & Planter Boxes</li>
                  <li> Retaining Walls</li>
                  <li> Full Yard Clean Ups</li>
                </ul>
            </div>
        </div>
    
    <Quote/>
    </div>
  )
}

