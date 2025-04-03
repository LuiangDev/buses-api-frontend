import React from "react";
import BusForm from "../components/BusForm";

const RegistrarBus = () => {
  return (
    <div className="min-h-screen bg-white bg-cover bg-center flex flex-col">
      <main className=" flex items-center justify-center px-4 py-10">
        <BusForm />
      </main>
    </div>
  );
};

export default RegistrarBus;
