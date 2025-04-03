import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-800 to-pink-500 text-white py-3 px-6 flex justify-between items-center shadow-md">
      <img src="/logo.png" alt="Logo CIVA" className="h-10" />

      <span className="text-sm font-medium tracking-wide hidden sm:block">
        📞 01 418-1111
      </span>
    </header>
  );
};

export default Navbar;
