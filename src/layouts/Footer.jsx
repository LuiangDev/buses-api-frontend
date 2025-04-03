import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-purple-900 text-white py-10 px-4 ">
      <div className="max-w-6xl mx-2 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="flex flex-col items-center md:items-center space-y-4">
          <p className="text-center text-base  md:text-base font-semibold">
            Encuéntranos en:
          </p>
          <div className="flex justify-center space-x-4 items-start">
            <a
              href="https://www.facebook.com/turismociva/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white rounded-full p-2"
            >
              <img
                src="/facebook.png"
                alt="Logo CIVA"
                className="w-5 h-5 object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/turismociva/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white rounded-full p-2"
            >
              <img
                src="/instagram.png"
                alt="Logo CIVA"
                className="w-5 h-5 object-contain"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/turismo-civa-s-a-c/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white rounded-full p-2"
            >
              <img
                src="/linkedin.png"
                alt="Logo CIVA"
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2 text-left">
          <p className="font-semibold text-sm">Econociva, Superciva</p>
          <p className="font-light text-xs pb-2">
            Av. Paseo de la República No. 5698 La Victoria - PERÚ
          </p>
          <p className="font-semibold text-sm mt-2">Exclusiva</p>
          <p className="font-light text-xs">
            Av. Javier Prado Este No. 1155 La Victoria - PERÚ
          </p>
        </div>

        <div className="text-center text-sm items-center  md:text-sm font-semibold flex flex-row md:flex-row gap-6">
          <p>
            <a
              href="https://info.civa.com.pe/wp-content/uploads/2024/11/TERMINOS_Y_CONDICIONES_V13_11-11-2024_WEB.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              TÉRMINOS Y CONDICIONES
            </a>
          </p>
          <p>
            <a
              href="https://drive.google.com/file/d/1e3KY0tAEuZud7NBMP03NZjkHx5kVG-E4/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              TÉRMINOS Y CONDICIONES CORTA LA SEMANA
            </a>
          </p>
          <p>
            <a
              href="https://info.civa.com.pe/wp-content/uploads/2024/07/POLITICA-DE-SEGURIDAD-VIAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              POLÍTICA DE SEGURIDAD VÍAL
            </a>
          </p>
          <p>
            <a
              href="https://info.civa.com.pe/wp-content/uploads/2023/03/CIVA-POLITICA-DE-PRIVACIDAD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              POLÍTICA DE PRIVACIDAD
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
