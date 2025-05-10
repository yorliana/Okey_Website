import React from "react";
import style from  './Cliente.module.css'
import {Link} from "react-router-dom";
import img from "../../../src/assets/img/Logookey.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

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
       

    </div>

    <div className={style.card}>
       

    </div>

    <div className={style.card}>
       

    </div>

    <div className={style.card}>
       

    </div>

    


</div>


       
         
        
       
        


        </div>

       
     
   
        

       


       

   
        



  
       


  );
};

export default Cliente;