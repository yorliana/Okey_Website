 
import React from "react";
import styles from  './EasyMgt.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo.png"
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/flechanegra.png"
import boton from "../../assets/img/blotoflecha.png"
import img1 from "../../assets/img/PORTADA.jpg"
import video from "../../assets/video/video.mp4"
import RedesEasy from "../EasyMgt/RedesEasy/RedesEasy";
const EasyMgt = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <><div className={styles.contenedor}>

     
   <img className={styles.img} src={img} alt="" />

      <div className={styles.flecha}>
        <a className={styles.btn} href="/"><img className={styles.boto} src={boton} alt="" /></a>

      </div>
      <div className={styles.letraspro}>
        <p className={styles.p}>Motion</p>

      </div>
      <div className={styles.morado}>
        <span className={styles.flechabajo}>↓</span>
       
      </div>
      <div className={styles.easy}>
 <h2 className={styles.h2}>EASY MGT</h2>
      </div>







      <div>
</div>

<div className={styles.section}>

  <div className={styles.description}>
    <div className={styles.lorem}>

    
    <h1 className={styles.H1}>DESCRIPCION DEL PROYECTO</h1>
    <p className={styles.lorems}>Easy-MGT es un ecosistema inmobiliario y comunitario 
      en una plataforma inteligente. Dirigido a personas que gestionan o venden propiedades,
       que se encargan del mantenimiento de viviendas o simplemente para arrendar. 
       Dicho esto, nuestro cliente necesitaba desarrollar una video explicativo, fácil 
       de entender y a la vez creativo. Y este fue el resultado. <br />
      
  </p>

      
    </div>
    <div className={styles.vertical}  style={{  width: 0, height: 250, border: '0.10px black solid'}}></div>

  <div className={styles.lorem1}>
    <h1 className={styles.H1}>SE HIZO</h1>
    <p  className={styles.lorems}>Diseño de story board<br />
      Video motion graphics a <br />
      </p>
  </div>

  <div className={styles.vertical}  style={{  width: 0, height: 250, border: '0.10px black solid'}}></div>

  <div className={styles.lorem1}>
     <h1 className={styles.H1}>CLIENTE</h1>
     <p  className={styles.lorems}>EASY MGT <br />
       </p>
  </div> 
 
   
  </div>

  <div className={styles.equipo}>

  <h1 className={styles.H1}>EQUIPO</h1>
  <p className={styles.lorems}>Mayra Muñoz

 <br />
     Ramiro Manzanos</p>

     <div className={styles.contEquipo}>
      <img className={styles.contEquipo} src={img1} alt="" />
     </div>

     
      <div >
  <video width="1200" height="450"  controls>
      <source src={video} type="video/mp4" />
      Tu navegador no soporta video HTML5.
    </video>
</div>

    
  </div>

 

<div className={styles.redesEasy}>
  <RedesEasy/>
</div>

 <div className={styles.con}>
            <a className={styles.btn} href="#"><img className={styles.botoflecha}  src={botoflecha} alt="" /></a>
                </div>
                
        <div className={styles.copyright}>

            <p className={styles.copy}>Copyright © 2023 | Okey Website&Creativity | Todos los derechos reservados </p>
       
                </div>
            
       
        



      </div>
      

     
       
      </div>



    


       

   
        



  
                </>


  );
};

export default EasyMgt;