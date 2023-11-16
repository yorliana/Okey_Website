
import React from "react";
import style from './Proyectos.module.css'
import Proyecto from "../../components/Proyecto/Proyecto";
import Redes from "../../components/foo/Redes";
import botoflecha from "../../../src/assets/img/blotoflecha.png"


export default function Proyectos() {
 

  return (
    
      <>

      
      <Proyecto />
      <Redes />
        <div className={style.con}>
            <a className={style.btn} href="#"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
                </div>

        <div className={style.copyright}>

            <p className={style.copy}>Copyright © 2023 | Okey Website&Creativity | Todos los derechos reservados </p>
       
                </div>
      </>
  );

    
      
        
      
        
    
      }
  