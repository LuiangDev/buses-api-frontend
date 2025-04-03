import React from "react";
import bus from "../assets/bus.png";

const BusList = ({ buses, onVerDetalle }) => {
  return (
    <div className="relative overflow-x-auto rounded-xl border-2  bg-white/70 backdrop-blur-sm">
      {/* Imagen de marca de agua */}
      <img
        src={bus}
        alt="Marca de Agua"
        className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none select-none"
      />
      {/* Tabla de Registros */}
      <table className="min-w-full relative z-10 text-sm text-left text-black">
        <thead className="text-xs uppercase bg-morado">
          <tr>
            <th className="px-4 py-3 font-bold text-white">Id</th>
            <th className="px-4 py-3 font-bold text-white">Número de Bus</th>
            <th className="px-4 py-3 font-bold text-white">Placa</th>
            <th className="px-4 py-3 font-bold text-white">
              Fecha de Creación
            </th>
            <th className="px-4 py-3 font-bold text-white">Características</th>
            <th className="px-4 py-3 font-bold text-white">Marca de Bus</th>
            <th className="px-4 py-3 font-bold text-white">
              Activo o Inactivo
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeo de buses para mostrar en la tabla */}
          {buses.map((bus) => (
            <tr key={bus.id} className=" transition  border-gray-200">
              <td className="px-4 py-3">{String(bus.id).padStart(3, "0")}</td>
              <td className="px-4 py-3">{bus.numeroBus}</td>
              <td className="px-4 py-3">{bus.placa}</td>
              <td className="px-4 py-3">
                {new Date(bus.fechaCreacion).toLocaleDateString()}
              </td>
              <td className="px-4 py-3">{bus.caracteristicas || "Ninguna"}</td>
              <td className="px-4 py-3">{bus.marca?.nombre || "Sin marca"}</td>
              <td className="px-4 py-3">
                {bus.activo ? "Activo" : "Inactivo"}
              </td>
              <td className="px-4 py-3">
                {/* Botón para ver detalle */}
                <button
                  onClick={() => onVerDetalle(bus)}
                  className="bg-fucsia text-white text-xs px-5 py-2 rounded-md hover:bg-pink-600 font-semibold"
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusList;
