import React, { Component } from 'react';
import { connect } from 'react-redux';

import DishPicker from './DishPicker';

import { getDishes, deleteDish } from '../../actions/dishes';
import { addMenuItem, getDayMenu } from '../../actions/menu';

export class DishPickerContainer extends Component {
  state = {
    typeName: '',
    dishName: ''
  };

  componentDidMount() { }

  onChangeType = (id) => {
    //console.log('onchange', this.props.getDishes(id, this.props.currentLocationState))
    const { types } = this.props;

    const selectedType = types.find((type) => type.id == id);
    this.setState({
      typeName: selectedType.name
    });
    this.props.getDishes(id, this.props.currentLocationState);
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { date } = this.props;

    const { typeName, dishName } = this.state;
    const dish = {
      type_name: typeName,
      dish_name: dishName,
      date
    };
    // console.log('add dish', this.props.addMenuItem(dish))
    this.props.addMenuItem(dish, this.props.currentLocationState);
    this.setState({
      dishName: ''
    });
    setTimeout(this.updateDisplay(date), 2000);
  };

  onDelete = (event) => {
    event.preventDefault();
    const dish = this.props.dishes.find(dish => {
      return dish.name === this.state.dishName
    })
    //6
    this.props.deleteDish(dish.id)
  }

  updateDisplay = (date) => {

    this.props.getDayMenu(date, this.props.currentLocationState);
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

const mapStateToProps = (state) => {
  return {
    date: state.date.date,
    types: state.types,
    dishes: state.dishes,
    currentLocationState : state.currentLocation
  };
};

export default connect(mapStateToProps, {
  getDishes,
  addMenuItem,
  getDayMenu,
  deleteDish
})(DishPickerContainer);
