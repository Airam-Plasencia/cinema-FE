import React from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-class">
      <div className="logo">
        
        <Link to="/">
          <img src="./src/assets/img/Cinema-logo.png" alt="cinema logo" className="logo-img" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/movies">Add Movies</Link></li>
        <li><Link to="/contact">Curiosity</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
