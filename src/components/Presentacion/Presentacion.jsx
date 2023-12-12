import React from "react";
import style from  './Presentacion.module.css'
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom"
import img from "../../../src/assets/img/LogoOkey.png"
import ovalo from '../../assets/img/Okey_Web.png'
import flecha from '../../assets/img/flecha.png'
import Redes from "../foo/Redes";
import Proyectos from "../../Pages/Proyectos/Proyectos";
const Presentacion = () => {
  const {pathname} = useLocation()
   


    


  return (

    <div className={style.contenedor}> 
    
<div className={style.idioma}>
            <Link className={style.button}>ES | EN</Link>
          </div>

        <div className={style.con}>
          <img className={style.img} src={img} alt="" />
         
        </div>
        
         
        
       <div className={style.contenido}>
          <p className={style.p}>Somos un estudio creativo que desarrolla sitios web interactivos <br />
            y sistemas de diseño de cualquier nivel <br />
            <span className={style.flecha} >↓</span>
            </p>
      </div>

        <div id={style.NavBarContainer}>
       
            <ul>
            <Link to={"/proyectos"} ><li id={pathname==="/proyectos"? style.active:undefined} >proyectos</li> </Link>
                <Link to={"/nosotros"} ><li id={pathname.includes("/nosotros")? style.active:undefined} >nosotros</li> </Link>
                <Link to={"/servicios"} ><li id={pathname==="/servicios"? style.active:undefined} >servicios</li></Link>
                <Link to={"/contacto"} ><li id={pathname==="/contacto"? style.active:undefined} >contacto <img className={style.flecha} src={flecha}alt="" /></li></Link> 
           
           
            </ul>
   
          
     
     
            
        </div>
        

       


       

   
        
</div>


  
       


  );
};

export default Presentacion;