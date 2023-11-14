import React from "react";
import style from  './Hacer.module.css'

import { useRef } from "react";

const Hacer = () => {
   
const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(
        "responsive_nav"
    );


};


  return (

    <div className={style.contenedor}>
          <div className={style.div}>
            <div className={style.base}>
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

             
<div className={style.boxes}>
  <div className={style.box}>
                     <div className={style.rectangle} />
                          </div>

                        <div className={style.box1}>
                              <div className={style.rectangle1} />
                                  </div>
</div>
                

                <div className={style.boxs}>

                          <div className={style.box2}>
                              <div className={style.rectangle2} />
                                  </div>

                          <div className={style.box3}>
                                <div className={style.rectangle3} />
                              </div>

            </div>

        </div>

      </div>


  );
};

export default Hacer;