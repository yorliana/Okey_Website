import React, { useState } from 'react';
import  style from'./Modals.module.css';
import Modal from '../../components/Modal/Modal';
import button from '../../assets/img/cerrar.png'
function Modals() {
  const [openModal, setOpenModal] = useState(false);



  return (
    <div className={style.susu}>
    <div className={style.contenedor}>
      <div className={style.cerrar}>
      
      <button className={style.button}> X </button>
</div>
     
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(true)} />
      </div>
      </div>
  );
}

export default Modals;