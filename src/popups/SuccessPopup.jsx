import React from "react";
import cierre from "../assets/cierre.png";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white px-6 py-12 rounded-2xl shadow-lg text-center max-w-xl w-full relative">
        {/* Botón de cierre del popup */}
        <button onClick={onClose} className="absolute top-5 right-5">
          <img
            src={cierre}
            alt="Cerrar"
            className="w-7 h-7 object-contain hover:scale-110 transition"
          />
        </button>
        {/* Contenido del popup */}
        <h2 className="text-2xl font-bold text-morado mb-2">
          ¡Bus registrado con éxito!
        </h2>
        <p className="text-black m-6 text-base">
          La información del Bus fue agregada correctamente a los registros.
        </p>
        {/* Botón de aceptar */}
        <button
          onClick={onClose}
          className="bg-fucsia hover:bg-pink-700 text-white py-2 px-8 rounded-full font-semibold"
        >
          <svg
            width="18"
            height="16"
            className="inline-block mr-1"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.64096 10.2958L7.38302 10.0378L4.46563 7.12045C4.36741 7.02659 4.23642 6.97469 4.10049 6.97587C3.96365 6.97706 3.83275 7.03195 3.73598 7.12872C3.63921 7.22549 3.58432 7.35639 3.58313 7.49324C3.58195 7.62916 3.63384 7.76014 3.72771 7.85836L7.27197 11.4026C7.27198 11.4026 7.27199 11.4026 7.27201 11.4027C7.36988 11.5005 7.50259 11.5554 7.64096 11.5554C7.77934 11.5554 7.91205 11.5005 8.00992 11.4027L8.00996 11.4026M7.64096 10.2958L15.3615 3.31314C15.5278 3.47943 15.6211 3.70492 15.6211 3.94005C15.6211 4.17517 15.5278 4.40067 15.3615 4.56695L8.26787 11.6606L8.00996 11.4026M7.64096 10.2958L7.89891 10.0378L14.3656 3.57113C14.3656 3.57111 14.3657 3.5711 14.3657 3.57109C14.4635 3.47327 14.5962 3.41832 14.7346 3.41832C14.873 3.41832 15.0057 3.47328 15.1036 3.57113M7.64096 10.2958L15.1036 3.57113M8.00996 11.4026L15.1035 4.30904C15.1036 4.30903 15.1036 4.30902 15.1036 4.309C15.2014 4.21113 15.2564 4.07842 15.2564 3.94005C15.2564 3.80169 15.2014 3.66899 15.1036 3.57113M8.00996 11.4026L15.1036 3.57113"
              fill="white"
              stroke="white"
              stroke-width="0.729577"
            />
          </svg>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
