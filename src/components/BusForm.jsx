import React, { useState } from "react";
import SelectorMarca from "./SelectorMarca";
import SuccessPopup from "../popups/SuccessPopup";
import bus from "../assets/bus.png";
import registro from "../assets/registro.png";

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
    <div className="relative max-w-6xl mx-auto mt-2 rounded-2xl overflow-hidden">
      {/* Imagen de marca de agua */}
      <img
        src={bus}
        alt="Bus Marca de Agua"
        className="absolute inset-0 w-full h-full object-contain opacity-70 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />

      {/* Contenido del formulario */}
      <div className="relative z-10 bg-white bg-opacity-90 rounded-2xl py-4 w-full shadow-lg px-6 md:px-12 lg:px-32">
        <h2 className="text-4xl md:text-4xl font-bold text-morado mb-10 text-center">
          Registro de Buses
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-xl text-black">
              Número de Bus
            </label>
            <input
              type="text"
              name="numeroBus"
              value={formData.numeroBus}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-fucsia rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-xl text-black">Placa</label>
            <input
              type="text"
              name="placa"
              value={formData.placa}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-fucsia rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-xl text-black">
              Características
            </label>
            <textarea
              name="caracteristicas"
              value={formData.caracteristicas}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border-2 border-fucsia rounded-lg focus:outline-none resize-none"
            />
          </div>

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
              className="h-4 w-4 text-fucsia rounded-lg accent-fucsia"
            />
            <label className="text-xl text-black">¿Activo?</label>
          </div>

          <button
            type="submit"
            className="bg-fucsia hover:bg-pink-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <img src={registro} alt="icono" className="w-5 h-5" />
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
    </div>
  );
};

export default BusForm;
