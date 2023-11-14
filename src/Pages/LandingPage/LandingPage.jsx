
import React from "react";
import style from './LandingPage.module.css'
import {useLocation} from "react-router-dom"
import Presentacion from "../../components/Presentacion/Presentacion";
import Redes from "../../components/foo/Redes";
import ovalo from "../../assets/img/Okey_Web.png"
import botoflecha from "../../assets/img/blotoflecha.png"



export default function LandingPage() {
  const {pathname} = useLocation()

  return (

    
      <div className={style.LandingPage}>
        
        <div className={style.contenedor}>

          <img className={style.ovalo} src={ovalo} alt="" />

    <Presentacion />
    

   
    
<Redes/>
  <div className={style.con}>
  <a className={style.btn} href="#"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
  </div>
<div className={style.copyright}>

        <p className={style.copy}>Copyright © 2023 | Okey Website&Creativity | Todos los derechos reservados </p>
       </div>
       </div>
        </div>
        
      
      
      
     
  
    
      
      
    


      );
      }
  