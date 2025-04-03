import React from 'react';

const DetalleBusPopup = ({ bus, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Detalle del Bus
        </h2>

        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>ID:</strong> {bus.id}</p>
          <p><strong>Número de Bus:</strong> {bus.numeroBus}</p>
          <p><strong>Placa:</strong> {bus.placa}</p>
          <p><strong>Fecha de Creación:</strong> {new Date(bus.fechaCreacion).toLocaleDateString()}</p>
          <p><strong>Características:</strong> {bus.caracteristicas || 'Ninguna'}</p>
          <p><strong>Marca:</strong> {bus.marca?.nombre || 'Sin marca'}</p>
          <p><strong>Estado:</strong> {bus.activo ? 'Activo' : 'Inactivo'}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalleBusPopup;
