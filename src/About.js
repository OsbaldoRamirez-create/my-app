import React from 'react'
import Quote from './Components/Quote'
import Slideshow from './Components/Slideshow'
import './Styles/AboutStyles.css';

export default function About() {
  return (
    <div className="about-container">
        <h1> About Us</h1>
        <Slideshow/>
        <div className='about-info'>
        <h2> Why choose us?</h2>
        <p>
            At Ramirez Landscaping, we bring your vision to life while giving fair prices. We have been maintaining and remaking yards for over 15 years all over the bay area
            even having loyal customers since we started. 
            We are a family owned and operated business that offers various services such as yard maintenance, fencing, irrigation systems, tree-work and more!
            Each yard is unique so we take the time to hear what our clients are looking for so we can satisfy them while staying in their budget. 
            Fill out the info below so that our family can start working with you and transforming your yard! 
        </p> 
        </div>
        <Quote/>
    </div>
        

  )
}
