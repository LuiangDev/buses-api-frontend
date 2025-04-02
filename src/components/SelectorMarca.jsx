import React, { useEffect, useState } from 'react';

const SelectorMarca = ({ onMarcaSeleccionada, onNuevaMarcaEscrita, valorSeleccionado }) => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await fetch('http://localhost:8080/marca');
        const data = await response.json();
        setMarcas(data);
      } catch (error) {
        console.error('Error al cargar marcas:', error);
      }
    };

    fetchMarcas();
  }, []);

  return (
    <div className="mb-4">
      <label className="block mb-1 text-gray-600">Marca:</label>
      <select
        className="w-full p-2 border rounded"
        name="marcaId"
        value={valorSeleccionado}
        onChange={(e) => onMarcaSeleccionada(e.target.value)}
        required
      >
        <option value="">-- Selecciona una marca --</option>
        {marcas.map((marca) => (
          <option key={marca.id} value={marca.id}>
            {marca.nombre}
          </option>
        ))}
        <option value="nueva">➕ Otra marca (agregar nueva)</option>
      </select>

      {valorSeleccionado === "nueva" && (
        <div className="mt-2">
          <label className="block text-sm text-gray-600">Nueva Marca:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Ej: King Long"
            onChange={(e) => onNuevaMarcaEscrita(e.target.value)}
            required
          />
        </div>
      )}
    </div>
  );
};

export default SelectorMarca;
