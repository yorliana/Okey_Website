import React from "react";
import style from  './Proyecto.module.css'
import {Link} from "react-router-dom";
import img from "../../../src/assets/img/LogoOkey.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Proyecto = () => {
 
   

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
            <a className={style.btn} href="/landing"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
          
                </div>
                <div className={style.letraspro}>
                    <p className={style.p}>Proyectos</p>
                    
                </div>
                <div className={style.morado}>
                   <span className={style.flechabajo} >↓</span>
                </div>
       
         
        
       
        <div id={style.NavBarContainer}>
       
            <ul>
               <Link to={"/easy"} ><li id={pathname==="/proyectos"? style.active:undefined} >EASY MGT  <img className={style.flez} src={icon} alt="" /> </li>  </Link>
                <Link to={"/donatella"} ><li id={pathname.includes("/nosotros")? style.active:undefined} >DONATELLA <img src={icon} alt="" />  </li>  </Link>
                <Link to={"/trapo"} ><li id={pathname==="/servicios"? style.active:undefined} >TRAPO <img src={icon} alt="" /> </li>  </Link>
                <Link to={"/desing"} ><li id={pathname==="/contacto"? style.active:undefined} >DESING  <img src={icon} alt="" /> </li> </Link> 
           
           
            </ul>
        <div>

        </div>

       
     
     </div>
            
        </div>
        

       


       

   
        



  
       


  );
};

export default Proyecto;