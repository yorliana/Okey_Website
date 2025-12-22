 
import React from "react";
import style from  './EasyMgt.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo.png"
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/flechanegra.png"
import boton from "../../assets/img/blotoflecha.png"
import img1 from "../../assets/img/PORTADA.jpg"
import miVideo from "../../../public/Easy-MGT.mp4"
import RedesEasy from "../EasyMgt/RedesEasy/RedesEasy";
const EasyMgt = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <><div className={style.contenedor}>

     
   <img className={style.img} src={img} alt="" />

      <div className={style.flecha}>
        <a className={style.btn} href="/"><img className={style.boto} src={boton} alt="" /></a>

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
</div>

<div className={style.section}>

  <div className={style.description}>
    <div className={style.lorem}>

    
    <h1 className={style.H1}>DESCRIPCION DEL PROYECTO</h1>
    <p className={style.lorems}>Easy-MGT es un ecosistema inmobiliario y comunitario 
      en una plataforma inteligente. Dirigido a personas que gestionan o venden propiedades,
       que se encargan del mantenimiento de viviendas o simplemente para arrendar. 
       Dicho esto, nuestro cliente necesitaba desarrollar una video explicativo, fácil 
       de entender y a la vez creativo. Y este fue el resultado. <br />
      
  </p>

      
    </div>
    <div className={style.vertical}  style={{  width: 0, height: 250, border: '0.10px black solid'}}></div>

  <div className={style.lorem1}>
    <h1 className={style.H1}>SE HIZO</h1>
    <p  className={style.lorems}>Diseño de story board<br />
      Video motion graphics a <br />
      </p>
  </div>

  <div className={style.vertical}  style={{  width: 0, height: 250, border: '0.10px black solid'}}></div>

  <div className={style.lorem1}>
     <h1 className={style.H1}>CLIENTE</h1>
     <p  className={style.lorems}>EASY MGT <br />
       </p>
  </div> 
 
   
  </div>

  <div className={style.equipo}>

  <h1 className={style.H1}>EQUIPO</h1>
  <p className={style.lorems}>Mayra Muñoz

 <br />
     Ramiro Manzanos</p>

     <div className={style.contEquipo}>
      <img className={style.contEquipo} src={img1} alt="" />
     </div>

     
      <div className={style.video-container}>
  <video
    className="video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/mi-video.mp4" type="video/mp4" />
    Tu navegador no soporta video.
  </video>
</div>

    
  </div>

 

<div className={style.redesEasy}>
  <RedesEasy/>
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

export default EasyMgt;