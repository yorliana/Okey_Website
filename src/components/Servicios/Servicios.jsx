import React from "react";
import style from  './Servicios.module.css'
import SliderBanner from '../SliderBanner/SliderBanner'
import { useRef } from "react";


const Servicios = ({ title, children }) => {
   
const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(
        "responsive_nav"
    );


};


  return (

    <><div className={style.contenedor}>

          <div className={style.base}>

              <div className={style.div}>

                  <div className={style.numero}>02</div>
                  <div className={style.label}>
                      <p className={style.text}>
                          <span className={style.text}>
                              lo que puedes <br />
                              hacer
                          </span>
                          <span className={style.sapan}>/</span>
                      </p>
                  </div>




              </div>


          </div>
          <div>

          </div>

      </div><div className={style.card}>
              <div className={style.header}> Ecommerce
                  {title}
              </div>
              <div className={style.body}>
                  {children}
              </div>
          </div></>

  );
};

export default Servicios;