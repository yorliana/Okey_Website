import React, { useState } from 'react';
import flechaI from './imgSlider/fechaI.png';
import flechaD from './imgSlider/flechaD.png';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div>No hay imágenes para mostrar.</div>;
  }

  return (
    <div style={carouselContainerStyle}>
      <div style={imageContainerStyle}>
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} style={imageStyle} />
      </div>
      <div style={buttonsContainerStyle}>
        <button onClick={goToPrevious} style={buttonStyle}><img   src={flechaI} style={{ width: '90px', height: '90px' }} /></button>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...dotButtonStyle,
              backgroundColor: index === currentIndex ? '#803DEA' :'#ccc',
            }}
          />
        ))}
        <button onClick={goToNext} style={buttonStyle}><img 
        
        style={{ width: '90px', height: '90px' }}  src={flechaD} /></button>
      </div>
    </div>
  );
};

const carouselContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '550px',
  margin: '0 auto',
  border: '1px  ',
  borderRadius: '50px',
  padding: '15px',
  backgroundColor: 'while',
};

const imageContainerStyle = {
  width: '100%',
  overflow: 'hidden',
  borderRadius: '50px',
 
};



const imageStyle = {
  display: 'block',
  width: '100%',
  height: 'auto',

};

const buttonsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
  gap: '10px',
  with:'20px',
  

};

const buttonStyle = {
  
  background:'none',
borderRadius: '100px',
  cursor: 'pointer',
  panding: 0,
 
};



const dotButtonStyle = {
  width: '5px',
  height: '12px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor:'none',
 
};

export default ImageCarousel ;

/*
import style from "./SliderBanner.module.css"
import img1 from './imgSlider/img1.png';
import img2 from './imgSlider/img2.png';
import img3 from './imgSlider/img3.png';
import img4 from './imgSlider/img4.png';



const SliderBanner = () => {
    return (
    <div id={style.SliderContainer}>
        <div>
            <ul>
                <li><img src={img1} alt="Img referencial" /></li>
                <li><img src={img2} alt="Img referencial" /></li>
                <li><img src={img3} alt="Img referencial" /></li>
                <li><img src={img4} alt="Img referencial" /></li>
                
            </ul>
        </div>

   </div>
    );
};


export default SliderBanner;

*/