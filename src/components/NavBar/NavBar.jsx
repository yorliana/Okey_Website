import style from "./NavBar.module.css";


 import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/main.css";
import {  useLocation } from "react-router-dom";
import img from '../../assets/img/Logookey1.png'

const NavBar = () =>{
  
 
const navRef = useRef();
    
const aRef = useRef();


const showNavbar = () => {
    navRef.current.classList.toggle(
        "responsive_nav"
    );


};






	return (

        
		<header>
			<div className={style.img}>
				<img  width={'1200px'} left = {'430px'}  height= {'450px'} top= {'49.12px'} position= {'relative'}  src={img} alt="" />
			</div>
		
    	
			
			
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		
		</header>



        /*
        <div id={style.NavBarContainer}>
       
            <ul>
                <Link to={""} ><li id={pathname===""? style.active:undefined} >Home</li> </Link>
                <Link to={""} ><li id={pathname.includes("/contactme")? style.active:undefined} >Proyectos</li> </Link>
                <Link to={""} ><li id={pathname===""? style.active:undefined} >Servicios</li></Link>
                <Link to={""} ><li id={pathname===""? style.active:undefined} >Hola!</li></Link>
                <Link to={""} ><li id={pathname===""? style.active:undefined} >Contactos</li></Link>
                
            </ul>
            
        </div>
        */
    )
};


export default NavBar;