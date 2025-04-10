import React from "react";
import img from '../../assets/img/video.png'

import style from './Video.module.css'


const Video = () => {
   



  return (

    <div className={style.contenedor}>

        <img className={style.img} src={img} />
       

      
    </div>
  );
};

export default Video;