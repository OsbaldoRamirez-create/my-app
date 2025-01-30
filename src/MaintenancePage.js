import React from 'react'
import './Styles/MaintenanceStyles.css';
import RamirezLogo from './Images/RamirezLogo.png';

export default function MaintenancePage() {
  return (
    <div className='maintenance-container'>
        <img src={RamirezLogo} className="ramirezLogo"alt="Logo"/>
    
        <h1>Yard Maintenance Services</h1>
        <div className='maintenance-services'>
            <h2> Our services include:</h2>
            <div className='yard-services'>
                <ul>  
                  <li>Lawn Care</li>
                  <li>Leaf Removal</li>
                  <li>Prune Fruit trees</li>
                  <li>Irrigation Repair & Management</li>
                  <li>Seasonal Planting</li>
                  <li>Weed Control</li>
                  <li>Fertilize Lawn & Plants</li>
                  <li>Gutter & Roof Cleaning</li>
                  <li>Shrub and Hedge Trimming</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}
