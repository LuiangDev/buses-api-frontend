import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-4 flex justify-between items-center">
        <img src="/logo-civa.png" alt="CIVA" className="h-8" />
        <span className="text-sm">📞 01 418-1111</span>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-2">
          Plataforma de Gestión de Buses
        </h1>
        <p className="text-gray-700 mb-6">
          Herramienta digital para el control y administración
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <Link
            to="/registrar"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            📝 Registrar Bus
          </Link>
          <Link
            to="/consultar"
            className="bg-white text-pink-600 border border-pink-600 hover:bg-pink-100 px-6 py-3 rounded-md font-semibold"
          >
            🔍 Consultar Buses
          </Link>
        </div>
        <img src="/bus-image.png" alt="Bus CIVA" className="max-w-md w-full" />
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white text-sm px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p className="font-semibold mb-1">Encuéntranos en:</p>
            <div className="flex gap-2">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
            <p className="mt-2">
              Econociva, Superciva<br />Av. Paseo de la República N° 5698 La Victoria – PERÚ
            </p>
            <p>
              Exclusiva<br />Av. Javier Prado Este N°s. 1155 La Victoria – PERÚ
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a href="#">TÉRMINOS Y CONDICIONES</a>
            <a href="#">CORTA LA SEMANA</a>
            <a href="#">POLÍTICA DE SEGURIDAD VIAL</a>
            <a href="#">POLÍTICA DE PRIVACIDAD</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
