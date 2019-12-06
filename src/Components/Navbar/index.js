import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vitalis Menu Editor
        </Link>
        <Link className="nav-link" to="/location">
          Selecteer locatie
        </Link>
        <Link className="nav-link" to="/createDish">
          Gerecht toevoegen
        </Link>
        <Link className="nav-link" to="/menu">
          Menu maken
        </Link>
        <Link className="nav-link" to="/weekMenu">
          Week select
        </Link>
        <p className="navbar-brand">Your location is</p>
      </nav>
    </div>
  );
};

export default Navbar;
