import React from "react";
//import ItemsContainer from "./ItemsContainer";
//import SocialIcons from "./SocialIcons";
//import { Icons } from "./Menus";
import img from "../../assets/img/Logo.png"
import style from  './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
 


  return (

    <footer class={style.footer}>

      <div class={style.row}>
        <div class={style.col}>
          <h2 className={style.h2}>contacto<span className={style.span}>/</span></h2>
          <p className={style.p}>mail@okey.com</p>
        </div>
          
        <div class={style.col}>

          <h2 className={style.h2}>síguenos <span className={style.span}>/</span></h2>
          <ul>
            <li><a  href="">instagram</a></li>
            <li><a  href="#">facebook</a></li>
            <li><a  href="#">threads</a></li>
            <li><a  href="#">linkedin</a></li>
            <li><a  href="#">tik tok</a></li>
          </ul>
         
          

      
          
          </div>
        

        <div class={style.col}>
          <h2 className={style.h2}>sedes <span className={style.span}>/</span></h2>
          <h3>COLOMBIA</h3>
          <p className={style.pp}>Bogotá</p>
          <h3 className={style.pp}>Télefono</h3>
          <p className={style.pp}>(+57) 312 423 2931</p>
          
         
        </div>

        <div>
          <h2 className={style.oculto}>sede</h2>
          <h3 className={style.h3}>VENEZUELA</h3>
          <p className={style.pp}>Cojedes</p>
          <h3 className={style.pp}>Télefono</h3>
          <p className={style.pp}>(+58) 426 440 0220</p>
        </div>
        

      </div>
      
      <div style={{width: 306, height: 0, border: '0.50px white solid'}}></div>
  <div className={style.col}>

    <p className={style.copyright}>Copyright © 2023 | OKEY W&C | Todos los derechos reservados | Política de Protección de datos personales | El texto y contenido gráfico del sitio web pertenecen a OKEY y no pueden ser utilizados por otros recursos sin nuestro permiso y sin el enlace a la fuente</p>
   <p className={style.copy}>Términos y privacidad  ||  Medición de la inclusión y la diversidad   </p>
   </div>
   
     <button className={style.btn}>Volver arriba</button>
  
 
  
    </footer>
   
  );
};

export default Footer;