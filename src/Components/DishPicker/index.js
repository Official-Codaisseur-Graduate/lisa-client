import React, { Component } from "react";
import { connect } from "react-redux";
import { getTypes } from "../../actions/types";
import { getDishes, deleteDish } from "../../actions/dishes";
import { addMenuItem, getDayMenu } from "../../actions/menu";
import DishPicker from "./DishPicker";

export class DishPickerContainer extends Component {
  state = {
    typeName: "",
    dishName: "",
    currentLocation: parseInt(this.props.currentLocation)
  };

  componentDidMount() {
    console.log("currentLocation", this.state.currentLocation);
    this.props.getTypes();
  }

  onChangeType = id => {
    const { types, currentLocation } = this.props;

    const selectedType = types.find(type => type.id === parseInt(id));
    this.setState({
      typeName: selectedType.name
    });
    this.props.getDishes(id, currentLocation);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { date } = this.props;
    const { typeName, dishName, currentLocation } = this.state;
    const dish = {
      type_name: typeName,
      dish_name: dishName,
      date,
      currentLocation
    };
    // console.log('add dish', this.props.addMenuItem(dish))
    this.props.addMenuItem(dish, currentLocation);
    this.setState({
      dishName: ""
    });
    setTimeout(this.updateDisplay(date), 2000);
  };

  onDelete = event => {
    event.preventDefault();
    const dish = this.props.dishes.find(dish => {
      return dish.name === this.state.dishName;
    });
    this.props.deleteDish(dish.id);
  };

  updateDisplay = date => {
    const { currentLocation } = this.props;
    this.props.getDayMenu(date, currentLocation);
  };

  render() {
    const { date, types, dishes } = this.props;
    return (
      <DishPicker
        date={date}
        types={types}
        dishes={dishes}
        onChange={this.onChange}
        onChangeType={this.onChangeType}
        onSubmit={this.onSubmit}
        dishName={this.state.dishName}
        onDelete={this.onDelete}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.date.date,
    types: state.types,
    dishes: state.dishes,
    currentLocation: state.currentLocation
  };
};

export default connect(mapStateToProps, {
  getTypes,
  getDishes,
  addMenuItem,
  getDayMenu,
  deleteDish
})(DishPickerContainer);
