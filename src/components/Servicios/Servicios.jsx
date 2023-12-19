import React from "react";
import style from  './Servicios.module.css'
import {Link} from "react-router-dom";
import img from "../../../src/assets/img/LogoOkey.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Servicios = () => {
 
   

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
                    <p className={style.p}>Nuestros clientes van desde pequeñas y medianas empresas hasta grandes marcas. A menudo, otras agencias <br />
de publicidad se asocian con nosotros para aprovechar nuestra experiencia en diseño, código y movimiento.</p>
                    
                </div>
                <div className={style.morado}>
                   <span className={style.flechabajo} >↓</span>
                </div>

<div className={style.servi}>
        <div className={style.cards}>

                <div className={style.card1}>
            
                <p className={style.codigo1}>01</p>


                <div className={style.barra}>
                <section className={style.section1}>

                </section>
            </div>
                <p className={style.codigo1}>DISEÑO</p>
                <div>
                 <p className={style.lorem1}>Lorem ipsum dolor sit amet, <br />
                    consectetuer adipiscing elit,<br />
                    sed diam nonummy nibh <br />
                    euismod tincidunt ut laoreet <br />
                    dolore magna aliquip ex ea <br />
                    commodo consequat. Duis <br />
                    autem vel eum iriure dolor in <br />
                    hendrerit in vulputate velit  <br />
                    esse molestie con</p>   
                </div>
                
                </div>

                <div className={style.card}>
            
            <p className={style.codigo}>02</p>
            <div className={style.barra}>
                <section className={style.section}>

                </section>
            </div>
                <p className={style.codigo}>CODIGO</p>
                <div>
                 <p className={style.lorem}>Lorem ipsum dolor sit amet, <br />
                    consectetuer adipiscing elit,<br />
                    sed diam nonummy nibh <br />
                    euismod tincidunt ut laoreet <br />
                    dolore magna aliquip ex ea <br />
                    commodo consequat. Duis <br />
                    autem vel eum iriure dolor in <br />
                    hendrerit in vulputate velit  <br />
                    esse molestie con</p>   
                </div>
                
                </div>

                <div className={style.card1}>
                <p className={style.codigo1}>03</p>


                <div className={style.barra}>
                <section className={style.section1}>

                </section>
            </div>
                <p className={style.codigo1}>MOTION</p>
                <div>
                 <p className={style.lorem1}>Lorem ipsum dolor sit amet, <br />
                    consectetuer adipiscing elit,<br />
                    sed diam nonummy nibh <br />
                    euismod tincidunt ut laoreet <br />
                    dolore magna aliquip ex ea <br />
                    commodo consequat. Duis <br />
                    autem vel eum iriure dolor in <br />
                    hendrerit in vulputate velit  <br />
                    esse molestie con</p>   
                </div>


                </div>

                <div className={style.vertical}  style={{  width: 0, height: 640, border: '0.10px black solid'}}></div>

                <div className={style.card1}>
                    
            
                <p className={style.codigo1}>04</p>


                <div className={style.barra}>
                <section className={style.section1}>

                </section>
            </div>
                <p className={style.codigo1}>MARKETING DIGITAL</p>
                <div>
                 <p className={style.lorem1}>Lorem ipsum dolor sit amet, <br />
                    consectetuer adipiscing elit,<br />
                    sed diam nonummy nibh <br />
                    euismod tincidunt ut laoreet <br />
                    dolore magna aliquip ex ea <br />
                    commodo consequat. Duis <br />
                    autem vel eum iriure dolor in <br />
                    hendrerit in vulputate velit  <br />
                    esse molestie con</p>   
                </div>
                </div>

    
        </div>

</div>
       
         
        
       
        


        </div>

       
     
   
        

       


       

   
        



  
       


  );
};

export default Servicios;