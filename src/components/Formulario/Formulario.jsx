import React from "react";
<<<<<<< HEAD
import  {useState} from 'react';
import boton from "../../assets/img/boton.png"
import style from  './Formulario.module.css'

 import img from "../../assets/img/Okey_Web.png"

const Formulario = () => {
 
  const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
  const [inputPais, cambiarInputPais] = useState('');
  const [inputServicio, cambiarInputServicio] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

  // Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputPais= (e) => {
		cambiarInputPais(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputServicio = (e) => {
		cambiarInputServicio(e.target.value);
	}

  return (
<>

<div>


			<form action="" onSubmit={handleSubmit} className={style.formulario}>
        <div className={style.separados}>
				<div>
					<label htmlFor="nombre">EMPRESA/NOMBRE</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

      
				<div>
					<label htmlFor="correo">E-MAIL</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>
        </div>

        <div className={style.separados}>
        <div>
					<label htmlFor="pais">PAÍS/CIUDAD</label>
					<input
						type="text"
						name="país"
						placeholder="País"
						id="país"
						value={inputPais}
						onChange={handleInputPais}
					/>
				</div>

        <div>
					<label htmlFor="servicio">DETALLES DEL SERVICIO/OPCIONAL</label>
					<input
						type="text"
						name="sericio"
						placeholder="Servicio"
						id="servicio"
						value={inputServicio}
						onChange={handleInputServicio}
					/>
				</div>
        </div>
        <div className={style.ContButon}>
				<button type="submit"><img  className ={style.boton} src={boton} alt="" /></button>
        </div>
			</form>
      
     </div>
		</>
    
=======
//import ItemsContainer from "./ItemsContainer";
//import SocialIcons from "./SocialIcons";
//import { Icons } from "./Menus";

import style from  './Formulario.module.css'



const Formulario = () => {
 


  return (

    <div className={style.body}>
      <div>
        <h2 className={style.h2}>Hagámosl</h2>
      
      </div>
      
    </div>
>>>>>>> 68a5aec (commit)
  );
};

export default Formulario;