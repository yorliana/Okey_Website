import React from "react";
import style from './Teams.module.css'
import Reel from "../../components/Reel/Reel";
import Redes from "../../components/foo/Redes";
import botoflecha from "../../../src/assets/img/blotoflecha.png"

import Team from "../../components/Team/Team";

export default function Teams() {
 

  return (
    
      <>

     
      <Team />
    
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