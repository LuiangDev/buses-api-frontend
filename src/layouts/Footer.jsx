import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold">Econociva, Superciva</p>
          <p>Av. Paseo de la República No. 5698 La Victoria - PERÚ</p>
          <p className="mt-2 font-semibold">Exclusiva</p>
          <p>Av. Javier Prado Este No. 1155 La Victoria - PERÚ</p>
        </div>

        <div className="flex justify-center space-x-4 items-start">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>

        <div className="text-right space-y-1">
          <p><a href="#" className="hover:underline">Términos y condiciones</a></p>
          <p><a href="#" className="hover:underline">Corta la semana</a></p>
          <p><a href="#" className="hover:underline">Política de seguridad vial</a></p>
          <p><a href="#" className="hover:underline">Política de privacidad</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
