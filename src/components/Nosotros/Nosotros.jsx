import React from "react";
import style from  './Nosotros.module.css'
<<<<<<< HEAD
import {Link} from "react-router-dom";
import img from "../../../src/assets/img/LogoOkey.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Nosotros = () => {
 
   

  const {pathname} = useLocation()
    
=======
import Slider from '../Slider/Slider'
import { useRef } from "react";

const Nosotros = () => {
   
const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(
        "responsive_nav"
    );


};
>>>>>>> 68a5aec (commit)


  return (

<<<<<<< HEAD
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
               <Link to={"/reel"} ><li id={pathname==="/proyectos"? style.active:undefined} >REEL   </li>  </Link>
                <Link to={"/team"} ><li id={pathname==="/nosotros"? style.active:undefined} >TEAM <img src={icon} alt="" />  </li>  </Link>
                <Link to={"/clientes"} ><li id={pathname==="/servicios"? style.active:undefined} >CLIENTES  </li>  </Link>
                
           
           
            </ul>
        <div>


        </div>

       
     
     </div>
            
        </div>
        

       


       

   
        
=======
    <div className={style.contenedor}>
        <div className={style.letras}>
            <Slider/>
       </div>
            <div className={style.base}>
                <div className={style.labe}>
                    <p className={style.estudio}>
                        SOMOS UN ESTUDIO CREATIVO <br />
                         INDEPENDIENTE, QUE DESARROLLA <br />
                        SITIOS WEB INTERACTIVOS Y SISTEMAS <br />
                        DE DISEÑO DE CUALQUIER NIVEL.  <br />
                    </p>
                    
                 </div>
                  <div className={style.label}>
          <div className={style.numero}>01</div>
        
            </div>
            
          <div className={style.label01}>
            <p className={style.nosotros}>
          <span className={style.text}>nosotros<span className={style.span}>↗</span></span>
            
            </p>
          </div>
            
      </div>



    </div>
  




     
    
    

   


>>>>>>> 68a5aec (commit)



  
<<<<<<< HEAD
       


=======
     

    
>>>>>>> 68a5aec (commit)
  );
};

export default Nosotros;