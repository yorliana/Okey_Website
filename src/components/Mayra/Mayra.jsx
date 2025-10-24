import React from "react";
import style from  './Mayra.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Mayra = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <div className={style.contenedor}> 
    
       

          <div className={style.con}>
          <img className={style.img} src={img} alt="" />
         
        </div>
        <div className={style.flecha}>
            <a className={style.btn} href="/team"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
          
                </div>
                <div className={style.letraspro}>
                    <p className={style.p}>Diseñadora Gráfica</p>
                    
                </div>
                
                <div className={style.easy}>
 <h2 className={style.h2}>MAYRA MUÑOZ</h2>
 
      </div>
      
         <p className={style.yorli}>nahansy19@gmail.com</p>
 
        
        
       

        </div>

       
     

       


       

   
        



  
       


  );
};

export default Mayra;