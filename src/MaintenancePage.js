import React from 'react'
import './Styles/MaintenanceStyles.css';
import RamirezLogo from './Images/RamirezLogo.png';

export default function MaintenancePage() {
  return (
    <div className='maintenance-container'>
        <img src={RamirezLogo} className="ramirezLogo"alt="Logo"/>
    
        <h1>Yard Maintenance Services</h1>
        <div className='maintenance-info'>
            <p>
                At Ramirez Landscaping, we offer a variety of services to help you maintain your yard whether 
                it's weekly, bi-weekly, or monthly. Our team is committed to enhancing the beauty of your 
                outdoor spaces, ensuring that each visit leaves your property looking pristine and well-kept.
                We treat every yard as it if were our own, taking pride in our attention to detail. 
                Utilizing the best equipment and latest techniques, we care for your yard efficiently and effectively. 
                With Ramirez Landscaping, you receive not just a service provider, but a dedicated partner
                who values your satisfaction and the health of your landscape. Hire us today and experience the difference we can make!
                Let our family maintain your yard, so you can enjoy your beautiful garden without the hassle.
            </p>
        </div>
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
