import React from "react";
import style from  './DonatellaMgt.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo.png"
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/flechanegra.png"
import boton from "../../assets/img/blotoflecha.png"

import RedesDonatella from "./RedesDonatella/RedesDonatella";

const DonatellaMgt = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <><div className={style.contenedor}>

     

      <div className={style.con}>
        <img className={style.img} src={img} alt="" />

      </div>
      <div className={style.flecha}>
        <a className={style.btn} href="/proyectos"><img className={style.boto} src={boton} alt="" /></a>

      </div>
      <div className={style.letraspro}>
        <p className={style.p}>Motion</p>

      </div>
     
      <div className={style.easy}>
 <h2 className={style.h2}>DONATELLA</h2>
      </div>







      <div>
</div>

<div className={style.section}>

  <div className={style.description}>
    <div className={style.lorem}>

    
    <h1 className={style.H1}>DESCRIPCION DEL PROYECTO</h1>
    <p className={style.lorems}>Lorem ipsum dolor sit amet, consectetuer <br />
       adipiscing elit, sed diam nonummy nibh <br />
      euismod tincidunt</p>

      
    </div>
    <div className={style.vertical}  style={{  width: 0, height: 250, border: '0.10px black solid'}}></div>

  <div className={style.lorem1}>
    <h1 className={style.H1}>SE HIZO</h1>
    <p  className={style.lorems}>Lorem ipsum dolor sit amet, consectetuer <br />
       adipiscing elit, sed diam nonummy nibh <br />
      euismod tincidunt</p>
  </div>

  <div className={style.vertical}  style={{  width: 0, height: 250, border: '0.10px black solid'}}></div>

  <div className={style.lorem1}>
     <h1 className={style.H1}>CLIENTE</h1>
     <p  className={style.lorems}>Lorem ipsum dolor sit amet, consectetuer <br />
       adipiscing elit, sed diam nonummy nibh <br />
      euismod tincidunt</p>
  </div> 
 
   
  </div>

  <div className={style.equipo}>

  <h1 className={style.H1}>EQUIPO</h1>
  <p className={style.lorems}>Lorem ipsum dolor <br />
     sit amet, cons</p>

     <div className={style.contEquipo}></div>
  </div>

 

<div className={style.redesEasy}>
  <RedesDonatella/>
</div>

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

export default DonatellaMgt;