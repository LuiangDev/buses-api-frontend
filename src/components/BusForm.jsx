import React, { useState } from 'react';

const BusForm = () => {
  const [formData, setFormData] = useState({
    numeroBus: '',
    placa: '',
    caracteristicas: '',
    activo: true,
    marca: { id: '' }
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'activo') {
      setFormData({ ...formData, activo: checked });
    } else if (name === 'marcaId') {
      setFormData({ ...formData, marca: { id: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/bus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('🚌 Bus registrado exitosamente');
        setFormData({
          numeroBus: '',
          placa: '',
          caracteristicas: '',
          activo: true,
          marca: { id: '' }
        });
      } else {
        alert('⚠️ Error al registrar el bus');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('🚨 Error al conectarse con el servidor');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Registrar Nuevo Bus</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Número de Bus:</label>
          <input
            type="text"
            name="numeroBus"
            value={formData.numeroBus}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Placa:</label>
          <input
            type="text"
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Características:</label>
          <input
            type="text"
            name="caracteristicas"
            value={formData.caracteristicas}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">ID de Marca:</label>
          <input
            type="number"
            name="marcaId"
            value={formData.marca.id}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="activo"
            checked={formData.activo}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">¿Activo?</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Registrar Bus
        </button>
      </form>
    </div>
  );
};

export default BusForm;
