import React from "react";
import BusForm from "../components/BusForm";
import { Link } from "react-router-dom";

const RegistrarBus = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-pink-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Registrar Bus</h1>
          <Link to="/" className="hover:underline text-sm">
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-start p-6">
        <div className="w-full max-w-2xl">
          <BusForm />
        </div>
      </main>
    </div>
  );
};

export default RegistrarBus;
