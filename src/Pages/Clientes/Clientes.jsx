
import React from "react";
import style from '../Nosotros/Nosotros.module.css'

import Redes from "../../components/foo/Redes";
import botoflecha from "../../../src/assets/img/blotoflecha.png"

import Cliente from "../../components/Cliente/Cliente";


export default function Clientes() {

  return (
    
    
    <>
      <Cliente />

      <div className={style.redes}>
        <Redes />
      </div>
      
        <div className={style.con}>
            <a className={style.btn} href="#"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
                </div>

        <div className={style.copyright}>

            <p className={style.copy}>Copyright © 2023 | Okey Website&Creativity | Todos los derechos reservados </p>
       
                </div>

                </>
   
  );

    
      
        
      
        
    
      }