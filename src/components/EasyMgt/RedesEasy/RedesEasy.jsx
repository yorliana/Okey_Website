import React from "react";
import style from  './RedesEasy.module.css'
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import instagram from "../../../assets/img/instagram1.png"
import facebook from "../../../assets/img/facebook1.png"
import linkedin from "../../../assets/img/linkedin1.png"
import tiktok from "../../../assets/img/tiktok1.png"


const RedesEasy= () => {
   

    const {pathname} = useLocation()


  return (

   <div className={style.Redes}>
        <div className={style.NavBarContainer}>
            
   
            <div className={style.icons}>
                <div    style={{ background: 'black', color: 'black', width: 200, height: 0, border: '0.50px black solid'}}></div>
                    <Link className={style.link}>instagram <br />  <p className={style.p}>okey_w&c</p></Link>
                    
                   <div className={style.red}>
                    
                         <a className={style.inst} href="#"><img className={style.icon}  src={instagram} alt="" /></a>
                    </div>
                       
                    
                   
                </div>
            </div>

            <div className={style.NavBarContainer}>
   
                 <div className={style.icons}>
                    <div style={{width: 200, height: 0, border: '0.50px black solid'}}></div>
                    <Link className={style.link}>facebook <br /> <p className={style.p}>okey_w&c</p></Link>
                    <div className={style.red}>
                         <a className={style.inst} href="#"><img className={style.icon}  src={facebook} alt="" /></a>
                    </div>
                   
                    
                </div>

            </div>

            <div className={style.NavBarContainer}>
   
            <div className={style.icons}>
                <div style={{width: 200,  height: 0, border: '0.50px black solid'}}></div>
                    <Link className={style.link}>linkedin <br /><p className={style.p}>okey Website&Creativity</p></Link>
                    <div className={style.red}>
                         <a className={style.inst} href="#"><img className={style.icon}  src={linkedin} alt="" /></a>
                    </div>
                    
                    
                </div>

            </div>


            <div className={style.NavBarContainer}>
   
                    <div className={style.icons}>
       <div style={{width: 200, height: 0, border: '0.50px black solid'}}></div>
           <Link className={style.link}>tik tok <br />  <p className={style.p}>@okey Website&Creativity</p></Link>
           <div className={style.red}>
                         <a className={style.inst} href="#"><img className={style.icon}  src={tiktok} alt="" /></a>
                    </div>
         
         
       </div>
       

   </div>

        </div>

  );
};

export default RedesEasy;