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

  if (loading) return <p className="text-morado">Cargando...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-morado mb-6">Listado de Buses</h2>

      <div className="mb-6">
        <label className="block text-base font-medium text-black mb-1">
          Buscar por número, placa o marca:
        </label>
        <div className="relative">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            //placeholder="Ej: 7, ABC123, Mercedes"
            className="block w-full px-4 py-2 border-2 rounded-md shadow-sm focus:outline-none"
          />
          {busqueda.trim() === "" && (
            <svg
              width="28"
              height="29"
              className="absolute top-1/2 left-3 transform -translate-y-1/2"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2 5.80004C9.71478 5.80004 8.29039 6.41111 7.24019 7.49882C6.18999 8.58653 5.59999 10.0618 5.59999 11.6C5.59999 13.1383 6.18999 14.6135 7.24019 15.7013C8.29039 16.789 9.71478 17.4 11.2 17.4C12.6852 17.4 14.1096 16.789 15.1598 15.7013C16.21 14.6135 16.8 13.1383 16.8 11.6C16.8 10.0618 16.21 8.58653 15.1598 7.49882C14.1096 6.41111 12.6852 5.80004 11.2 5.80004ZM2.79999 11.6C2.79982 10.2308 3.11169 8.88087 3.71023 7.66001C4.30877 6.43916 5.17708 5.38185 6.24454 4.5741C7.31201 3.76634 8.54848 3.23094 9.85339 3.01144C11.1583 2.79195 12.4948 2.89454 13.7542 3.31089C15.0137 3.72725 16.1604 4.44559 17.1012 5.40752C18.042 6.36944 18.7504 7.54777 19.1686 8.84668C19.5868 10.1456 19.7031 11.5284 19.508 12.8826C19.313 14.2369 18.812 15.5243 18.046 16.6402L24.7898 23.6249C25.0448 23.8984 25.1859 24.2646 25.1827 24.6448C25.1795 25.025 25.0323 25.3887 24.7727 25.6575C24.5132 25.9264 24.162 26.0789 23.795 26.0822C23.4279 26.0855 23.0742 25.9393 22.8102 25.6752L16.0678 18.692C14.8111 19.6175 13.3327 20.1669 11.7945 20.2799C10.2564 20.393 8.71789 20.0653 7.34761 19.3328C5.97733 18.6004 4.82815 17.4914 4.026 16.1274C3.22385 14.7635 2.79969 13.1971 2.79999 11.6Z"
                fill="#5B2884"
              />
            </svg>
          )}
        </div>
      </div>

      {busesFiltrados.length === 0 ? (
        <p className="text-black">
          No hay buses que coincidan con la búsqueda.
        </p>
      ) : (
        <BusList buses={busesFiltrados} onVerDetalle={verDetalle} />
      )}

      <div className="mt-6 flex justify-center gap-2 text-sm">
        <button
          onClick={() => setPagina((prev) => Math.max(prev - 1, 0))}
          disabled={pagina === 0}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        >
          &lt;
        </button>
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPagina(index)}
            className={`w-8 h-8 flex items-center justify-center rounded-md border transition font-semibold ${
              pagina === index
                ? "bg-morado text-white border-morado"
                : "text-morado border-gray-300 bg-white hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setPagina((prev) => Math.min(prev + 1, totalPaginas - 1))
          }
          disabled={pagina >= totalPaginas - 1}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        >
          &gt;
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
