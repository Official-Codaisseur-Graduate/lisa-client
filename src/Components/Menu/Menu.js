import React, { Component } from "react";
import "./Menu.css";
import Calendar from "react-calendar";

import DishPicker from "../DishPicker";
import DishForm from "../DishForm";
//import TypeForm from '../TypeForm';
import MenuDisplay from "../MenuDisplay";
//import ExportToPdf from '../ExportToPdf';

class Menu extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="Menu">
        {/* <div className="menuBar">
        <h1 className="appHeader">Vitalis Menu Editor</h1>
        <ExportToPdf />
      </div> */}
        <div className="menuEditor">
          <div className="sideBar">
            <div className="Calendar">
              <Calendar
                locale="nl-NL"
                onClickDay={date => this.props.changeDate(date)}
              />
            </div>
            <DishPicker />
            <DishForm />
          </div>
          <MenuDisplay />
        </div>
      </div>
    );
  }
}

export default Menu;
