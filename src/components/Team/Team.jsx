 
import React from "react";
import style from  './Team.module.css'

import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Team = () => {
 
   

  const {pathname} = useLocation()
    


  return (

    <div className={style.contenedor}> 
    

          <div className={style.con}>
          <img className={style.img} src={img} alt="" />
         
        </div>
        <div className={style.flecha}>
            <a className={style.btn} href="/nosotros"><img className={style.botoflecha}  src={botoflecha} alt="" /></a>
          
                </div>
                <div className={style.letraspro}>
                    <p className={style.p}>Team</p>
                    
                </div>
              
       
         
        
       
        <div id={style.NavBarContainer}>
       
            <ul>
               <Link to={"/yorliana"} ><li id={pathname==="/proyectos"? style.active:undefined} >YORLIANA MUÑOZ   <img src={icon} alt="" /></li>  </Link>
                <Link to={"/mayra"} ><li id={pathname==="/nosotros"? style.active:undefined} >MAYRA MUÑOZ  </li>  </Link>
              
                
           
           
            </ul>
        <div>


        </div>

       
     
     </div>
            
        </div>
        

       


       

   
        



  
       


  );
};

export default Team;