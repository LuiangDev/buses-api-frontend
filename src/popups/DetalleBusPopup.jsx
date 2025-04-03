import React from 'react';

const DetalleBusPopup = ({ bus, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-8 relative">
      <button onClick={onClose} className="absolute top-5 right-5">
          <img
            src="/cierre.png"
            alt="Cerrar"
            className="w-7 h-7 object-contain hover:scale-110 transition"
          />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-morado">
          Detalle del Bus
        </h2>

        <div className="space-y-2 text-base text-black">
          <p><strong className='text-morado'>ID:</strong> {bus.id}</p>
          <p><strong className='text-morado'>Número de Bus:</strong> {bus.numeroBus}</p>
          <p><strong className='text-morado'>Placa:</strong> {bus.placa}</p>
          <p><strong className='text-morado'>Fecha de Creación:</strong> {new Date(bus.fechaCreacion).toLocaleDateString()}</p>
          <p><strong className='text-morado'>Características:</strong> {bus.caracteristicas || 'Ninguna'}</p>
          <p><strong className='text-morado'>Marca:</strong> {bus.marca?.nombre || 'Sin marca'}</p>
          <p><strong className='text-morado'>Estado:</strong> {bus.activo ? 'Activo' : 'Inactivo'}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalleBusPopup;
