
import React from "react";
import "../Navbar/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="nav-class">
      <div className="logo">
        <img src="./assets/img/galaxy.png" alt="Cinema Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/movies">Add Movies</a></li>
        <li><a href="/contact">Curiosity</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
