import React from "react";
import style from  './Nosotros.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Nosotros = () => {
 
   

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
                    <p className={style.p}>Proyectos</p>
                    
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
        

       


       

   
        



  
       


  );
};

export default Nosotros;