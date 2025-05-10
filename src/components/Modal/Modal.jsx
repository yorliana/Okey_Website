import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import style from'./Modal.module.css'
import botonCerrar from '../../assets/img/cerrar.png'
import Carosuel from '../SliderBanner/Carosuel';
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
    left: "10px",
    width: '100%',
    height: '800px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding:'50px',
    zIndex: 1100,
  };

  const botonCerrarStyles = {
    background: 'none', // Quita el fondo del botón
    border: 'none', // Quita el borde del botón
    padding: 0, // Quita el padding para que solo se vea la imagen

  };
  const modalContentStyles = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f2f3f4',
    padding: '20px',
    borderRadius: '50px',
    minWidth: '1300px', 
    height: '600px',
    display: 'flex', // Usamos flexbox para posicionar el botón
    flexDirection: 'column', // Alineamos los elementos verticalmente (por defecto)
    alignItems: 'center', 
    justifyContent: 'space-between' 
  };
  const imagenCerrarStyles = {
    width: '100px', // Ajusta el tamaño de la imagen según necesites
    height: '100px', // Ajusta el tamaño de la imagen según necesites
  };

  const carosuelStyles={
    width: '800px', // Mantén el ancho deseado del Carousel
    padding: '90px',
    left:'10px',
    // No es necesario 'left' cuando usamos flexbox para centrar
    display: 'flex',
    justifyContent: 'center', // Centra el contenido del Carousel si es necesario
    alignItems: 'center', // Centra verticalmente el contenido del Carousel si es necesario
  }

  const botonCerrarContainerStyle = {
    position: 'absolute',
    top: '20px', // Ajusta la distancia desde la parte superior
    right: '20px', // Ajusta la distancia desde la derecha
    zIndex: 1, // Asegura que esté por encima de otros elementos
  };
  return (
    
    <div style={modalStyles}>
      
       
      <div style={modalContentStyles}>
      <div style={botonCerrarContainerStyle}>
        <button style={botonCerrarStyles} onClick={cerrarModal}>
          <img src={botonCerrar} style={imagenCerrarStyles} alt="" />
        </button>
      </div>
        <div style={carosuelStyles}>
         
       <Carosuel/>
     </div>
       
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


        </div>
      </ModalAutomatico>
    </div>
  );
};

export default ComponenteConModalAutomatico;

