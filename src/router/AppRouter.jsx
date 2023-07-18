import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import NuestrosServicios from '../components/NuestrosServicios/NuestrosServicios';
import Contacto from '../components/Contacto/Contacto';
import Footer from '../components/Footer/Footer';



const AppRouter = () => {
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <BrowserRouter>
        <>
          <NavBar handleOpenNavMenu={handleOpenNavMenu}  />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Servicios" element={<NuestrosServicios/>} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
          {/* <WhatsApp phoneNumber={phoneNumber} /> */}
          <Footer />
          
        </>
     
    </BrowserRouter>
  );
};

export default AppRouter;