import React, { Component } from "react";
import "./Menu.css";
import Calendar from "react-calendar";
import DishPickerContainer from "../DishPicker/index";
import MenuDisplay from "../MenuDisplay";

class Menu extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="Menu">
        <div className="menuEditor">
          <div className="sideBar">
            <div className="Calendar">
              <Calendar
                locale="nl-NL"
                onClickDay={date => this.props.changeDate(date)}
              />
            </div>
            <div>
            <DishPickerContainer />
            </div>
          </div>
          <MenuDisplay />
        </div>
      </div>
    );
  }
}

export default Menu;
