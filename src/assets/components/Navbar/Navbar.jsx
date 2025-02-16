
import React from "react";
import "../Navbar/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="nav-class">
      <div className="logo">
        <img src="/assets/img/Cinema-logo.png" alt="Cinema Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/movies">Películas</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
