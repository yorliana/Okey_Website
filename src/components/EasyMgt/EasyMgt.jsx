 
import React from "react";
import style from  './EasyMgt.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/LogoOkey.png"
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/flechanegra.png"

import RedesEasy from "../EasyMgt/RedesEasy/RedesEasy";
const EasyMgt = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <><div className={style.contenedor}>

      <div className={style.idioma}>
        <Link className={style.button}>ES | EN</Link>
      </div>

      <div className={style.con}>
        <img className={style.img} src={img} alt="" />

      </div>
      <div className={style.flecha}>
        <a className={style.btn} href="/landing"><img className={style.botoflecha} src={botoflecha} alt="" /></a>

      </div>
      <div className={style.letraspro}>
        <p className={style.p}>Motion</p>

      </div>
      <div className={style.morado}>
        <span className={style.flechabajo}>↓</span>
       
      </div>
      <div className={style.easy}>
 <h2 className={style.h2}>EASY MGT</h2>
      </div>







      <div>
</div><div className={style.section}>

<RedesEasy/>
 <div className={style.con}>
            <a className={style.btn} href="#"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
                </div>
                
        <div className={style.copyright}>

            <p className={style.copy}>Copyright © 2023 | Okey Website&Creativity | Todos los derechos reservados </p>
       
                </div>
            
       
        



      </div>
      

     
       
      </div>



    


       

   
        



  
                </>


  );
};

export default EasyMgt;