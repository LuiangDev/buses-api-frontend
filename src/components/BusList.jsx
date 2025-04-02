import React, { useEffect, useState } from "react";

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busId, setBusId] = useState('');


  const handleBuscarPorId = async () => {
    if (!busId) {
      alert("Por favor ingresa un ID válido.");
      return;
    }
  
    try {
      const res = await fetch(`http://localhost:8080/bus/${busId}`);
      if (!res.ok) throw new Error("Bus no encontrado");
  
      const data = await res.json();
  
      alert(`
  🚌 Bus ID: ${data.id}
  Número: ${data.numeroBus}
  Placa: ${data.placa}
  Marca: ${data.marca?.nombre || 'No registrada'}
  Características: ${data.caracteristicas}
  Estado: ${data.activo ? 'Activo' : 'Inactivo'}
  Fecha de Registro: ${new Date(data.fechaCreacion).toLocaleString('es-PE')}
      `);
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };


  useEffect(() => {
    fetch("http://localhost:8080/bus")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data) => {
        setBuses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Buses</h2>
      <div style={{ marginBottom: '1rem' }}>
  <input
    type="number"
    placeholder="Ingresa ID del bus"
    onChange={(e) => setBusId(e.target.value)}
    value={busId}
    className="border p-1 rounded mr-2"
  />
  <button
    onClick={handleBuscarPorId}
    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
  >
    Buscar por ID
  </button>
</div>

      {buses.length === 0 ? (
        <p>No hay buses registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Número de Bus</th>
              <th>Placa</th>
              <th>Fecha de Creación</th>
              <th>Características</th>
              <th>Marca</th>
              <th>Activo</th>
            </tr>
          </thead>

          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.id}</td>
                <td>{bus.numeroBus}</td>
                <td>{bus.placa}</td>
                <td>
                  {new Date(bus.fechaCreacion).toLocaleString("es-PE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    // hour: "2-digit",
                    // minute: "2-digit",
                  })}
                </td>
                <td>{bus.caracteristicas}</td>
                <td>{bus.marca?.nombre || "Sin marca"}</td>
                <td>{bus.activo ? "Sí" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BusList;
