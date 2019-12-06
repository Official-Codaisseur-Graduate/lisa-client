import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const allLocations = useSelector(state => state.locationReducer);
  
  const currentLocation = useSelector(state => state.currentLocation);
  console.log("currentLocation", currentLocation);
  const currLocparsed = parseInt(currentLocation);
  console.log("currLocparsed", currLocparsed);

  const luck = allLocations.find(location => location.id === currLocparsed);
  console.log("luck", luck);

  const luckName = luck && true;
  console.log("luckName", luckName);

  const join = luckName && <p>Your current address is {luck.address}</p>;

  // const addre = luck.name;
  // console.log("addre", addre);

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
        {join}
      </nav>
    </div>
  );
};

export default Navbar;
