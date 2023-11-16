import {  Route, Routes } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage';

import Proyectos from "./Pages/Proyectos/Proyectos";

function App() {


  return (
    <>
      
      <Routes>
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/proyectos" element={<Proyectos />} />
       

      </Routes>
     
    </>

      

  )
}

export default App
