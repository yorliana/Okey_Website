import React from "react";
import style from  './Contact.module.css'
import {Link} from "react-router-dom";
import img from "../../../src/assets/img/LogoOkey.png"
import {useLocation} from "react-router-dom"
import Formulario from "../Formulario/Formulario";
import fondo from "../../assets/img/Okey_Web.png"
import Redes from "../../components/foo/Redes";
import botoflecha from "../../../src/assets/img/blotoflecha.png"


const Contact = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <><div className={style.contenedor}>

      <div className={style.idioma}>
        <Link className={style.button}>ES | EN</Link>
      </div>

      <div className={style.contend}>
        <img className={style.img} src={img} alt="" />

      </div>
      <div className={style.flecha}>
        <a className={style.btn} href="/landing"><img className={style.botoflechas} src={botoflecha} alt="" /></a>

      </div>
      <div className={style.letraspro}>
        <p className={style.p}>Aquí podemos ayudarte</p>

      </div>
      <div className={style.morado}>
        <span className={style.flechabajo}>↓</span>
      </div>
    <div className={style.formus}>
      <div className={style.formuConte}>
        <div className={style.formik}>
          
          <Formulario/>
        </div>
        
      </div>
</div>
    <div className={style.franja}>
        <div className={style.contact}>
          <h1>contacto /</h1>
          <p className={style.pp}>hello@okey.com</p>
        </div>

        <div className={style.sedes}>
          <h1>sedes /

          </h1>
          <p className={style.pp}>Colombia (+57) 312 423 2931 <br />
            Venezuela (+58) 426 440 0220
          </p>

        </div>

      </div>
      
      <div className={style.redes}>
        <Redes />
      </div>
      
        <div className={style.con}>
            <a className={style.btn} href="#"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
                </div>

        <div className={style.copyright}>

            <p className={style.copy}>Copyright © 2023 | Okey Website&Creativity | Todos los derechos reservados </p>
       
                </div>
      
      </div>
      </>
                
       

  );
};

export default Contact;