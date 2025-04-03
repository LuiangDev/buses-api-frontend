import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

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
        <img src="/bus.png" alt="Bus CIVA" className="max-w-md w-full" />
      </main>
    </div>
  );
};

export default Home;
