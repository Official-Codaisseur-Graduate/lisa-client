import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/index";
import HomeContainer from "../Home";
import SelectLocation from "../Location/SelectLocation";
import CreateDishFormContainer from "../CreateDishForm/index";
import Menu from "../Menu";
import WeekSelect from "../WeekSelect";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/location" component={SelectLocation} />
        <Route exact path={`/createDish`} component={CreateDishFormContainer} />
        <Route exact path={`/location/:locationId`} component={Menu} />
        <Route path="/week" component={WeekSelect} />
      </div>
    );
  }
}

export default App;
