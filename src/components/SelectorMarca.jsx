import React, { useEffect, useState } from "react";
import flecha from "../assets/flecha.png";

const SelectorMarca = ({
  onMarcaSeleccionada,
  onNuevaMarcaEscrita,
  valorSeleccionado,
  mostrarInputNuevaMarca,
}) => {
  // Estado para almacenar las marcas
  const [marcas, setMarcas] = useState([]);

  // Estado para manejar la nueva marca y el uso de una nueva marca
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
      <label className="block text-xl text-black mb-1">Marca de Bus</label>

      <div className="relative">
        <select
          className="appearance-none w-full p-3 border-2 border-fucsia rounded-lg  focus:outline-none focus:border-fucsia focus:ring-1 focus:ring-fucsia"
          value={valorSeleccionado}
          onChange={(e) => onMarcaSeleccionada(e.target.value)}
          required
        >
          <option value="">Selecciona una marca</option>
          {marcas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nombre}
            </option>
          ))}
          <option value="nueva">Otra marca</option>
        </select>

        {/* Imagen personalizada como flecha */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <img
            src={flecha}
            alt="desplegar"
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>

      {/* Input para nueva marca, visible solo si se selecciona "Otra marca" */}   
      {mostrarInputNuevaMarca && (
        <div className="mt-4">
          <label className="block text-xl text-black mb-1">Nueva Marca</label>
          <input
            type="text"
            className="w-full p-3 border-fucsia border-2 rounded-lg  focus:outline-none focus:border-fucsia"
            //placeholder="Ej: Volvo"
            onChange={(e) => onNuevaMarcaEscrita(e.target.value)}
            required
          />
        </div>
      )}
    </div>
  );
};

export default SelectorMarca;
