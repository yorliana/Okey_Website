/*
import { React, useRef } from 'react';
import './Slider.css';
import bg1 from '../../assets/img/instagram.png';
import bg2 from '../../assets/img/linkedin.png';
import bg3 from '../../assets/img/tiktok.png';
import bg4 from '../../assets/slider/img4.jpeg'

const Slider = () => {

    let imageContainerRef = useRef(null)
    const images = [bg1, bg2, bg3, bg4]

    const prev = () => imageContainerRef.current.scrollLeft -= 250;
    const next = () => imageContainerRef.current.scrollLeft += 250;
    
    return (
       

       <div className="container">
        <div className="content">
            <div className="prev" onClick={prev}></div>
            

            <div className="slide" ref={imageContainerRef}>
                {images.map((image, index) => { return ( <img key={index} src={image} alt={`Imagen ${index + 1}` } />)} )}
            </div>
           
            <div className="next" onChange={next}></div>
        </div>
       </div> 
    )

    
}

export default Slider;




*/