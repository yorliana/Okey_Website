import React from 'react';

import image1 from '../../assets/img/Logokey.png';
import image2 from '../../assets/img/okeylogo2.png';
import image3 from '../../assets/img/okeylogo.png';
import style from './Carrusel.module.css'

import Carosuel from '../../components/SliderBanner/Carosuel';

const Carrusel = () => {
  const images = [image1, image2, image3];

  return (
    <div >
      <h1>Carrusel de Imágenes</h1>

    <Carosuel/>
      

          
     
   
    </div>
  );
};

export default Carrusel;