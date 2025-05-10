import React from 'react';
import ImageCarousel from './ImageCarousel'

function Carosuel() {
  const images = [
    'https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628',
    'https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5dx6e_B7lj34xzn6syikhhD3qwRZoikZHg&s',
    'https://st3.depositphotos.com/10440072/15729/i/450/depositphotos_157298232-stock-photo-beautiful-beach-chairs-on-the.jpg',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <p style={{ textAlign: 'left', marginBottom: '20px', fontFamily:'Poppins', fontStyle:600 }}>En okey construimos productos brillantes</p>
    <ImageCarousel images={images} />
  </div>

  );
}

export default Carosuel;