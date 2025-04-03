import React from "react";

const BusList = ({ buses, onVerDetalle }) => {
  return (
    <table className="min-w-full bg-white border rounded-md shadow">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Número</th>
          <th className="py-2 px-4 border-b">Placa</th>
          <th className="py-2 px-4 border-b">Creación</th>
          <th className="py-2 px-4 border-b">Características</th>
          <th className="py-2 px-4 border-b">Marca</th>
          <th className="py-2 px-4 border-b">Activo</th>
          <th className="py-2 px-4 border-b">Acción</th>
        </tr>
      </thead>
      <tbody>
        {buses.map((bus) => (
          <tr key={bus.id} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b">{bus.id}</td>
            <td className="py-2 px-4 border-b">{bus.numeroBus}</td>
            <td className="py-2 px-4 border-b">{bus.placa}</td>
            <td className="py-2 px-4 border-b">
              {new Date(bus.fechaCreacion).toLocaleDateString()}
            </td>
            <td className="py-2 px-4 border-b">
              {bus.caracteristicas || "Ninguna"}
            </td>
            <td className="py-2 px-4 border-b">
              {bus.marca?.nombre || "Sin marca"}
            </td>
            <td className="py-2 px-4 border-b">{bus.activo ? "Sí" : "No"}</td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => onVerDetalle(bus)}
                className="text-blue-600 hover:underline"
              >
                Ver Detalle
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BusList;
