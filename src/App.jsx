import {  Route, Routes } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage';

import Proyectos from "./Pages/Proyectos/Proyectos";
import Easy from "./Pages/EASY/Easy"

function App() {


  return (
    <>
      
      <Routes>
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/easy" element={<Easy />} />

      </Routes>
     
    </>

      

  )
}

export default App
