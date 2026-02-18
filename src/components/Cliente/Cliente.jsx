import React from "react";
import style from  './Cliente.module.css'
import img from "../../assets/img/okeylogo.png"
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import img23 from "../../assets/img/Trabajo23.jpg"
import img24 from "../../assets/img/Trabajo24.jpg"
import img25 from "../../assets/img/Trabajo25.jpg"
import img26 from "../../assets/img/Trabajo26.jpg"
import img27 from "../../assets/img/Trabajo27.jpg"
import img28 from "../../assets/img/Trabajo28.jpg"

const Cliente = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <div className={style.contenedor}> 
    
       

          <div className={style.con}>
          <img className={style.img} src={img} alt="" />
         
        </div>
        <div className={style.flecha}>
            <a className={style.btn} href="/"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
          
                </div>
                <div className={style.letraspro}>
                    <p className={style.p}>Nuestros clientes van desde pequeñas y medianas empresas hasta grandes marcas. A menudo, otras agencias <br />
de publicidad se asocian con nosotros para aprovechar nuestra experiencia en diseño, código y movimiento.</p>
                    
                </div>
               
<div className={style.cards}>

    <div className={style.card}>
      <img className={style.card1} src={img23} alt="" />
       

    </div>

    <div className={style.card}>
       
 <img className={style.card1} src={img24} alt="" />
       
    </div>

    <div className={style.card}>
        <img className={style.card1} src={img25} alt="" />
       

    </div>

    

    


</div>


                      
<div className={style.cards1}>

    <div className={style.card}>
      <img className={style.card1} src={img26} alt="" />
       

    </div>

    <div className={style.card}>
       
 <img className={style.card1} src={img27} alt="" />
       
    </div>

    <div className={style.card}>
        <img className={style.card1} src={img28} alt="" />
       

    </div>

    

    


</div>

        </div>


  );
};

export default Cliente;