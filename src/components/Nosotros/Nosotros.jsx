import React from "react";
import style from  './Nosotros.module.css'
import Slider from '../Slider/Slider'
import { useRef } from "react";

const Nosotros = () => {
   
const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(
        "responsive_nav"
    );


};


  return (

    <div className={style.contenedor}>
        <div className={style.letras}>
            <Slider/>
       </div>
            <div className={style.base}>
                <div className={style.labe}>
                    <p className={style.estudio}>
                        SOMOS UN ESTUDIO CREATIVO <br />
                         INDEPENDIENTE, QUE DESARROLLA <br />
                        SITIOS WEB INTERACTIVOS Y SISTEMAS <br />
                        DE DISEÑO DE CUALQUIER NIVEL.  <br />
                    </p>
                    
                 </div>
                  <div className={style.label}>
          <div className={style.numero}>01</div>
        
            </div>
            
          <div className={style.label01}>
            <p className={style.nosotros}>
          <span className={style.text}>nosotros<span className={style.span}>↗</span></span>
            
            </p>
          </div>
            
      </div>



    </div>
  




     
    
    

   





  
     

    
  );
};

export default Nosotros;