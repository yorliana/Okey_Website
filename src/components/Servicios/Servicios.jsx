import React from "react";
import style from  './Servicios.module.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/okeylogo.png"
import flecha from '../../assets/img/flecha.png'
import {useLocation} from "react-router-dom"
import botoflecha from "../../assets/img/blotoflecha.png"
import icon from "../../assets/img/flechaCorrecta4.png"

const Servicios = () => {
 

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
        <p className={style.p}>
            Nuestros clientes van desde pequeñas y medianas empresas hasta grandes marcas. A menudo, otras agencias <br />
            de publicidad se asocian con nosotros para aprovechar nuestra experiencia en diseño, código y movimiento.</p>
    </div>
                

    <div className={style.servi}>
        <div className={style.cards}>
        <div className={style.card1}>
        <p className={style.codigo1}>01</p>

        <div className={style.barra}>
        <section className={style.section1}>
        </section>
        </div>
            
        <p className={style.codigo1}>BRANDING</p>
        <div>
            <p className={style.lorem1}>
            Entendemos que tu marca es más 
            que un logo; es la esencia de lo 
            que representas. Nuestro servicio 
            de branding está diseñado para 
            ayudarte a contar tu historia de 
            manera auténtica e impactante. 
            No solo diseñamos; sino que te 
            acompañamos en la implementación </p> 
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
            <p className={style.lorem}>
            En nuestro estudio, sabemos que tu sitio web es la vitrina de tu negocio en el mundo
            digital. Creamos un desarrollo eficiente ya que utilizamos las últimas tecnologías y
            mejores prácticas para construir un sitio web rápido y seguro. Con un diseño atractivo y
            funcional que refleje la identidad de tu marca.
            </p>   
        </div>
    </div>

    <div className={style.card1}>
        <p className={style.codigo1}>03</p>
        <div className={style.barra}>
        <section className={style.section1}>
        </section>
        </div>
            <p className={style.codigo1}>VIDEO</p>
            <div>
            <p className={style.lorem1}>
            Contar historias visuales es una de las formas más poderosas de conectar con tu
            audiencia. Nuestro servicio de video, motion y animación está diseñado para dar vida a
            tus ideas. Tu historia merece ser contada de una manera única. ¡Hablemos y
            empecemos a crear algo extraordinario juntos!               
            </p>   
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
            <p className={style.lorem1}>
            Nuestro objetivo es impulsar tu presencia en línea y conectar de manera efectiva con tu
            audiencia, a través de una estrategia personalizada, contenido de calidad, publicidad
            digital y nos aseguramos de que tu inversión genere resultados, alcanzando a la
            audiencia adecuada en el momento adecuado.
            </p>   
            </div>
    </div>
    </div>
    </div>
</div>

  );
};

export default Servicios;