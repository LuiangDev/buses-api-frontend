import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white items-center">
      {/* Main content */}
      <main className="flex flex-col px-4 m-12">
        <h1 className="text-4xl md:text-5xl font-bold text-morado mb-2">
          Plataforma de Gestión de Buses
        </h1>
        <p className="text-black mb-6 text-base md:text-lg font-medium">
          Herramienta digital para el control y administración
        </p>
        <div className="flex items-center flex-col md:flex-row gap-14">
        <div className="flex flex-col md:flex-col gap-8 mb-10">
          <Link
            to="/registrar"
            className="flex items-center justify-center gap-2 bg-fucsia hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition duration-300"
          >
            <img
              src="/registro.png"
              alt="Registrar Bus"
              className="w-7 h-7 object-contain"
            />
            Registrar Bus
          </Link>

          <Link
            to="/consultar"
            className="flex items-center justify-center gap-2 bg-fucsia hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition duration-300"
          >
            <img
              src="/consulta.png"
              alt="Registrar Bus"
              className="w-7 h-7 object-contain"
            />
            Consultar Buses
          </Link>
        </div>
        <img src="/bus.png" alt="Bus CIVA" className="max-w-xl w-full" />
        </div>
      </main>
    </div>
  );
};

export default Home;
