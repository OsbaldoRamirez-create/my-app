import React, {useState, useEffect}from 'react'
import image1 from '../Images/SlabsLandscape.png';
import image2 from '../Images/RetainingWallAndGrass.png';
import image3 from '../Images/BackLawn.png';
import image4 from '../Images/BarkAndRockSlabs.png';
import image5 from '../Images/fence.png';


const yardImages = [
{src: image1, alt:"Front yard slabs", text:"Rocks Slabs Landscape"},
{src: image2, alt:"Retaining wall", text:"Retaining Wall and Artifical Lawn"},
{src: image3, alt:"Backyard Lawn", text:"Back yard lawn"},
{src: image4, alt:"Bark and slabs", text:"Bark and Rock Slabs"},
{src: image5, alt:"Backyard Fence", text:"New Redwood fence"}
]

const Slideshow = ({images = yardImages}) => {
    
    const [slideIndex, setSlideIndex]=useState(0);
useEffect(() => {
    const timer = setTimeout(()=>
        setSlideIndex((slideIndex + 1) % images.length), 4000);
        return () => clearTimeout(timer);
},[slideIndex, images.length]);
  
  
    return (
      <div className='slideshow-main'>
    <div className="slideshow-container"> 
  
          {images.map((image, index) => (
            <div key={index} className= {`slide ${index === slideIndex ? 'active': ''}`}> 
            <img src={image.src} alt={image.alt}/>
            <div className='slide-text'>{image.text}</div>
            </div>
          ))}
  
          {/*Slideshow Arrows */ }
          <button className="prev" onClick={() => setSlideIndex((slideIndex -1 + images.length) % images.length)}>&#10094;</button>
          <button className="next" onClick={() => setSlideIndex((slideIndex +1) % images.length)}>&#10095;</button>
         </div> 
  
      {/* slideshow dots */}
        <div className=" dot-container">
            {images.map((_, dotIndex)=>(
              <span key={dotIndex} className={`dot ${dotIndex === slideIndex ? 'active-dot': ''}`}
              onClick={()=> setSlideIndex(dotIndex)}> </span>
            ))}

      </div>
    
    </div>
  );
};
export default Slideshow;
