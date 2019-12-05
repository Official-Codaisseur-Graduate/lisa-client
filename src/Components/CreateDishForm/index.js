import React, { Component } from "react";
import { connect } from "react-redux";
import { getTypes } from "../../actions/types";
import { createDish } from "../../actions/dishes";
import DishForm from "./DishForm";

export class CreateDishFormContainer extends Component {
  state = {
    typeId: "",
    dishName: "",
    currentLocation: this.props.currentLocation
  };

  componentDidMount = () => {
    this.props.getTypes();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const { typeId, dishName, currentLocation } = this.state;
    const dish = { typeId, dishName, currentLocation };
    
    await this.props.createDish(dish, currentLocation);
    await this.setState({
      dishName: ""
    });
  };

  render() {
    const { onChange, onSubmit } = this;
    const { types } = this.props;
    const { typeId, dishName } = this.state;
    return (
      <div className="DishForm">
        <DishForm
          types={types}
          type={typeId}
          dishName={dishName}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    types: state.types,
    currentLocation: state.currentLocation
  };
};

export default connect(mapStateToProps, { getTypes, createDish })(
  CreateDishFormContainer
);
