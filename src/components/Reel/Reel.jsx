import React from "react";
import style from  './Reel.module.css'
import {Link} from "react-router-dom";
import img from "../../../src/assets/img/LogoOkey.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"
import ReactPlayer from 'react-player/youtube'
import Video from "./video.mp4"


const Reel = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <div className={style.contenedor}> 
    
        <div className={style.idioma}>
            <Link className={style.button}>ES | EN</Link>
        </div>

          <div className={style.con}>
          <img className={style.img} src={img} alt="" />
         
        </div>
        <div className={style.flecha}>
            <a className={style.btn} href="/nosotros"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
          
                </div>
                <div className={style.letraspro}>
                    <p className={style.p}>Nosotros</p>
                    
                </div>
                <div className={style.morado}>
                   <span className={style.flechabajo} >↓</span>
                </div>

                <div className={style.easy}>
                    <h2 className={style.h2}>REEL</h2>
                </div>
            <div className={style.objeto}>
                 <ReactPlayer url='https://www.youtube.com/watch?v=6u7eFsA8EuU'  controls width={1200} height={600 }/>
            </div>
             
              


   </div>

  

   

  


  


   




  


);
};

export default Reel;