import React, { useState } from "react";
import SelectorMarca from "./SelectorMarca";
import SuccessPopup from "../popups/SuccessPopup";

const BusForm = () => {
  const [formData, setFormData] = useState({
    numeroBus: "",
    placa: "",
    caracteristicas: "",
    activo: true,
    marca: { id: "" },
  });

  const [nuevaMarca, setNuevaMarca] = useState("");
  const [usarNuevaMarca, setUsarNuevaMarca] = useState(false);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "activo") {
      setFormData({ ...formData, activo: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let marcaIdFinal = formData.marca.id;

    try {
      // Si el usuario elige crear una nueva marca
      if (usarNuevaMarca && nuevaMarca.trim() !== "") {
        const resMarca = await fetch("http://localhost:8080/marca", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombre: nuevaMarca }),
        });

        if (!resMarca.ok) {
          alert("Error al registrar la nueva marca");
          return;
        }

        const marcaCreada = await resMarca.json();
        marcaIdFinal = marcaCreada.id;
      }

      // Validación si no hay marca
      if (!marcaIdFinal) {
        alert("⚠️ Debes seleccionar o registrar una marca");
        return;
      }

      const busData = {
        ...formData,
        marca: { id: marcaIdFinal },
      };

      const resBus = await fetch("http://localhost:8080/bus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(busData),
      });

      if (resBus.ok) {
        setMostrarPopup(true);
        setFormData({
          numeroBus: "",
          placa: "",
          caracteristicas: "",
          activo: true,
          marca: { id: "" },
        });
        setNuevaMarca("");
        setUsarNuevaMarca(false);
      } else {
        alert("⚠️ Error al registrar el bus");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("🚨 Error al conectarse con el servidor");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
        Registrar Nuevo Bus
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="numeroBus"
          value={formData.numeroBus}
          onChange={handleChange}
          placeholder="Número de Bus"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          placeholder="Placa"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="caracteristicas"
          value={formData.caracteristicas}
          onChange={handleChange}
          placeholder="Características"
          className="w-full p-2 border rounded"
        />

        <SelectorMarca
          valorSeleccionado={usarNuevaMarca ? "nueva" : formData.marca.id}
          mostrarInputNuevaMarca={usarNuevaMarca}
          onNuevaMarcaEscrita={setNuevaMarca}
          onMarcaSeleccionada={(id) => {
            if (id === "nueva") {
              setUsarNuevaMarca(true);
              setFormData({ ...formData, marca: { id: "" } });
            } else {
              setUsarNuevaMarca(false);
              setFormData({ ...formData, marca: { id } });
            }
          }}
        />

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

      {mostrarPopup && (
        <SuccessPopup
          mensaje="🚌 Bus registrado exitosamente"
          onClose={() => setMostrarPopup(false)}
        />
      )}
    </div>
  );
};

export default BusForm;
