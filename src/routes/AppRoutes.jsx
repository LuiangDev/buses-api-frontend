import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegistrarBus from '../pages/RegistrarBus';
import ConsultarBuses from '../pages/ConsultarBuses';

const AppRoutes = () => {
  return (
    // Definición de las rutas de la aplicación
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registrar" element={<RegistrarBus />} />
      <Route path="/consultar" element={<ConsultarBuses />} />
    </Routes>
  );
};

export default AppRoutes;
