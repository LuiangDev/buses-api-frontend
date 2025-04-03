import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import llamar from "../assets/llamar.png";

const Navbar = () => {
  return (
<header className="w-full bg-gradient-to-r from-morado to-fucsia text-white py-7 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 shadow-md">
  <Link to="/">
  <img src={logo} alt="Logo CIVA" className="h-10" />
</Link>
  <span className="text-sm md:text-base font-semibold flex items-center gap-2">
    <img
      src={llamar}
      alt="llamar"
      className="w-5 h-5 md:w-6 md:h-6 object-contain"
    />
    <span className="text-center">01 418-1111</span>
  </span>
</header>

  );
};

export default Navbar;
