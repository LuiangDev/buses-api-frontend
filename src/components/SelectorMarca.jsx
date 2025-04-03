import React, { useEffect, useState } from "react";

const SelectorMarca = ({
  onMarcaSeleccionada,
  onNuevaMarcaEscrita,
  valorSeleccionado,
  mostrarInputNuevaMarca,
}) => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const res = await fetch("http://localhost:8080/marca");
        const data = await res.json();
        setMarcas(data);
      } catch (error) {
        console.error("Error cargando marcas:", error);
      }
    };

    fetchMarcas();
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600">Marca:</label>
      <select
        className="w-full p-2 border rounded"
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

      {mostrarInputNuevaMarca && (
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
