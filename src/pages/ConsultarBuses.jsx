import React, { useEffect, useState } from "react";
import DetalleBusPopup from "../popups/DetalleBusPopup";
import BusList from "../components/BusList";

const ConsultarBuses = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busSeleccionado, setBusSeleccionado] = useState(null);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8080/bus?page=${pagina}&size=5`)
      .then((response) => {
        if (!response.ok) throw new Error("Error en la respuesta del servidor");
        return response.json();
      })
      .then((data) => {
        setBuses(data.content || []);
        setTotalPaginas(data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [pagina]);

  const verDetalle = (bus) => {
    setBusSeleccionado(bus);
    setMostrarPopup(true);
  };

  const busesFiltrados = buses.filter((bus) => {
    const filtro = busqueda.trim().toLowerCase();
    return (
      bus.numeroBus?.toString().toLowerCase().includes(filtro) ||
      bus.placa?.toLowerCase().includes(filtro) ||
      bus.marca?.nombre?.toLowerCase().includes(filtro) ||
      (filtro === "sin marca" && !bus.marca?.nombre)
    );
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Consultar Buses</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Buscar por número, placa o marca:
        </label>
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Ej: 7, ABC123, Mercedes"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {busesFiltrados.length === 0 ? (
        <p>No hay buses que coincidan con la búsqueda.</p>
      ) : (
        <BusList buses={busesFiltrados} onVerDetalle={verDetalle} />
      )}

      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setPagina((prev) => Math.max(prev - 1, 0))}
          disabled={pagina === 0}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-sm text-gray-600">Página {pagina + 1} de {totalPaginas}</span>
        <button
          onClick={() => setPagina((prev) => Math.min(prev + 1, totalPaginas - 1))}
          disabled={pagina >= totalPaginas - 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

      {mostrarPopup && busSeleccionado && (
        <DetalleBusPopup
          bus={busSeleccionado}
          onClose={() => {
            setMostrarPopup(false);
            setBusSeleccionado(null);
          }}
        />
      )}
    </div>
  );
};

export default ConsultarBuses;
