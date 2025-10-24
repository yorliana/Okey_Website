import React , { useState} from "react";
import style from  './Presentacion.module.css'
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom"
import img from "../../assets/img/okeylogo.png"
import ovalo from '../../assets/img/Okey_Web.png'
import flecha from '../../assets/img/flecha.png'
import Redes from "../foo/Redes";
import Proyectos from "../../Pages/Proyectos/Proyectos";
import i18next from "i18next";
import global_en from "../../components/i18n/en.json"
import global_es from "../../components/i18n/es.json"
import { I18nextProvider } from "react-i18next";
import Modals from "../../Pages/Modals/Modals";


i18next.init({
    interpolation: { escapeValue: false},
    lng: "es",
    resources:{
      es: {
        global: global_es,
      
  
      },
      en:{
        global: global_en,
   
  
      }
  
    }
  });


const Presentacion = () => {
  const {pathname} = useLocation()
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
      setShowModal(prev => !prev)
    }


    


  return (
<I18nextProvider i18n={i18next}>
    <div className={style.contenedor}> 
    


        <div className={style.con}>
          <img className={style.img} src={img} alt="" />
         
        </div>
        
         
        
       <div className={style.contenido}>
          <p className={style.p}>Somos un estudio creativo que desarrolla sitios web interactivos <br />
            y sistemas de diseño de cualquier nivel <br />
            
            </p>
      </div>


  <div className={style.modal}>

              
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


  
       
</I18nextProvider>

  );
};

export default Presentacion;