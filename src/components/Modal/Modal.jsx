import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import flecha from '../../assets/img/flechaAbajo.png'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import style from'./Modal.module.css'


import slide_img1 from '../../assets/slider/img1.jpeg'
import slide_img2 from '../../assets/slider/img2.png'
import slide_img3 from '../../assets/slider/img3.webp'
import slide_img4 from '../../assets/slider/img4.jpeg'
import slide_img5 from '../../assets/slider/img5.png'
import slide_img6 from '../../assets/slider/img4.jpeg'
import slide_img7 from '../../assets/slider/img5.png'

const ModalAutomatico = ({ children }) => {
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    // Abre el modal cuando el componente se monta
    setModalAbierto(true);
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  

  const modalStyles = {
    display: modalAbierto ? 'block' : 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '800px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding:'80px',
    paddingLeft:'10px',
    zIndex: 1100,
  };


  const modalContentStyles = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f2f3f4',
    padding: '100px',
    borderRadius: '50px',
    minWidth: '1100px',
        
    height: '500px',
    
  };
  

  return (
    <div style={modalStyles}>
      
      <div style={modalContentStyles}>
        
        <button className={style.bottom} onClick={cerrarModal}>X</button>
      </div>
    </div>
  );
};

const ComponenteConModalAutomatico = () => {
  return (
    <div>
      <h1>Contenido principal</h1>
      <p>Este es el contenido principal de la página.</p>
      <ModalAutomatico>
   
        <p>En okey construimos productos brillantes</p>
        
        <div className={style.swiper}>

<Swiper

  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  }}
  pagination={{ el: '.swiper-pagination', clickable: true }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
>
    <SwiperSlide>
      <img className={style.imagen} src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img className={style.imagen}  src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img className={style.imagen}  src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img   src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img   src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img    src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img  src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
  </Swiper>
        </div>
      </ModalAutomatico>
    </div>
  );
};

export default ComponenteConModalAutomatico;


/*
import React from 'react';
import style from'./Modal.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import flecha from '../../assets/img/flechaAbajo.png'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



import slide_img1 from '../../assets/slider/img1.jpeg'
import slide_img2 from '../../assets/slider/img2.png'
import slide_img3 from '../../assets/slider/img3.webp'
import slide_img4 from '../../assets/slider/img4.jpeg'
import slide_img5 from '../../assets/slider/img5.png'
import slide_img6 from '../../assets/slider/img4.jpeg'
import slide_img7 from '../../assets/slider/img5.png'
import styled from 'styled-components';




export default function Modal () { 
   
  
    return (
<div className={style.container}> 

  <h1 className={style.h1}>En okey construimos productos brillantes <img  src={flecha} alt="" /> </h1>
  
  <Swiper

  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  }}
  pagination={{ el: '.swiper-pagination', clickable: true }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
>
    <SwiperSlide>
      <img className={style.imagen} src={slide_img1} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img className={style.imagen}  src={slide_img2} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img className={style.imagen}  src={slide_img3} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img  className={style.imagen}  src={slide_img4} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img  className={style.imagen}  src={slide_img5} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img  className={style.imagen}  src={slide_img6} alt="slide_img" />
    </SwiperSlide>

    <SwiperSlide>
      <img  className={style.imagen}  src={slide_img7} alt="slide_img" />
    </SwiperSlide>

    <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
  </Swiper>
</div>
      
          )
};
*/