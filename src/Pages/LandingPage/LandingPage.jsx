
import React from "react";
import style from './LandingPage.module.css'
import {useLocation} from "react-router-dom"
import Presentacion from "../../components/Presentacion/Presentacion";
import Redes from "../../components/foo/Redes";
import ovalo from "../../assets/img/Okey_Web.png"
import botoflecha from "../../assets/img/blotoflecha.png"
import i18next from "i18next";
import global_en from "../../components/i18n/en.json"
import global_es from "../../components/i18n/es.json"
import { I18nextProvider } from "react-i18next";

i18next.init({
    interpolation: { escapeValue: false},
    lng: "es",
    resources:{
      es: {
        global: global_es,
      
  
      },
      en:{
        global: global_en,
   
  
      }
  
    }
  });

export default function LandingPage() {
  const {pathname} = useLocation()
  

  return (

    <I18nextProvider i18n={i18next}>
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
        </I18nextProvider>
      
      
      
     
  
    
      
      
    


      );
      }
  