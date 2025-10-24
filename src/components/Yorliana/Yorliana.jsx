import React from "react";
import style from  './Yorliana.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo2.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Yorliana = () => {
 
   

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
                    <p className={style.p}>Development&COO</p>
                    
                </div>
              
                <div className={style.easy}>
 <h2 className={style.h2}>YORLIANA</h2>
 <h2 className={style.h2}>MUÑOZ</h2>
 
      </div>
      
         <p className={style.yorli}>ing.yorlianam24@gmail.com</p>
 
        
        
       

        </div>

       
     

       


       

   
        



  
       


  );
};

export default Yorliana;