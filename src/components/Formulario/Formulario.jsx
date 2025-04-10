
import  {useState} from 'react';
import boton from "../../assets/img/boton.png"
import style from  './Formulario.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
 import img from "../../assets/img/Okey_Web.png"

const Formulario = () => {
 
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_idkxpz4', 'template_9tbu01s', form.current, {
        publicKey: 'YVLs0NhG0pb2h3KQW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  /*
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
*/
  return (
<>

<div>


			<form ref={form} onSubmit={sendEmail} className={style.formulario}>
        <div className={style.separados}>
				<div>
					<label htmlFor="nombre">EMPRESA/NOMBRE</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						//value={inputNombre}
						//onChange={handleInputNombre}
					/>
				</div>

      
				<div>
					<label htmlFor="email">E-MAIL</label>
					<input
						type="text"
						name="email"
						placeholder="Correo"
						id="correo"
						//value={inputCorreo}
						//onChange={handleInputCorreo}
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
						//value={inputPais}
						//onChange={handleInputPais}
					/>
				</div>

        <div>
					<label htmlFor="message">DETALLES DEL SERVICIO/OPCIONAL</label>
					<input
						type="text"
						name="message"
						placeholder="Servicio"
						id="servicio"
						//value={inputServicio}
						//onChange={handleInputServicio}
					/>
				</div>
        </div>
        <div className={style.ContButon}>
				<button type="submit" value ="Send"> <img  className ={style.boton} src={boton} alt="" /></button>
        </div>
			</form>
      
     </div>
		</>
    
  );
};

export default Formulario;