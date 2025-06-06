import {  Route, Routes } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage';

import Proyectos from "./Pages/Proyectos/Proyectos";
import Easy from "./Pages/EASY/Easy"
import Donatella from "./Pages/Donatella/Donatella";
import Nosotros from "./Pages/Nosotros/Nosotros";
import Reels from "./Pages/Reels/Reels";

import Teams from "./Pages/Teams/Teams";
import Yorli from "./Pages/Yorli/Yorli";
import May from "./Pages/May/May";
import Cliente from "./components/Cliente/Cliente";
import Clientes from "./Pages/Clientes/Clientes";
import Servicio from "./Pages/Servicio/Servicio";
import Contacto from "./Pages/Contacto/Contacto";
import { useTranslation } from "react-i18next";
import Modal from "./components/Modal/Modal";
import Modals from "./Pages/Modals/Modals";
import Carrusel from "./Pages/Carrusel/Carrusel";




function App() {
const {t} = useTranslation()

  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/donatella" element={<Donatella />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/reel" element={<Reels />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/yorliana" element={<Yorli/>} />
        <Route path="/mayra" element={<May/>} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/servicios" element={<Servicio/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/modals" element={<Modals/>} />
        <Route path="/modal" element={<Modal/>} />
        <Route path="/carrusel" element={<Carrusel/>} />
        

       
      </Routes>
     
    </>

      

  )
}

export default App
