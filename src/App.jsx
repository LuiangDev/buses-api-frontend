import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
