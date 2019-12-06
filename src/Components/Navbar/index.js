import React from "react";
import { useSelector } from "react-redux"; //react hooks used here
import { Link } from "react-router-dom";

const Navbar = () => {
  const allLocations = useSelector(state => state.locationReducer);
  const currentLocation = useSelector(state => state.currentLocation);
  const currLocParsed = parseInt(currentLocation);

  const clientCurrentLocation = allLocations.find(
    location => location.id === currLocParsed
  );

  const locationDisplay = clientCurrentLocation && (
    <p>Your current address is: {clientCurrentLocation.address}</p>
  );

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
        {locationDisplay}
      </nav>
    </div>
  );
};

export default Navbar;
