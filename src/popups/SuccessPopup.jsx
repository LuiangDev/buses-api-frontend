import React from "react";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-pink-600 font-bold text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          ¡Bus registrado con éxito!
        </h2>
        <p className="text-gray-600 mb-4">
          La información del Bus fue agregada correctamente a los registros.
        </p>
        <button
          onClick={onClose}
          className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full font-semibold"
        >
          ✓ Aceptar
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
