import React, { Component } from 'react'
import { connect } from 'react-redux'

import DishPicker from './DishPicker'

import { getDishes } from '../../actions/dishes'
import { addMenuItem, getDayMenu } from '../../actions/menu'


export class DishPickerContainer extends Component {
  state = {
    typeName: '',
    dishName: '',
  }

  componentDidMount() {

  }

  onChangeType = id => {
    const { types } = this.props
    const selectedType = types.find(type => type.id == id)
    this.setState({
      "typeName": selectedType.name
    })
    this.props.getDishes(id)
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { date } = this.props
    const { typeName, dishName } = this.state
    const dish = {
      type_name: typeName,
      dish_name: dishName,
      date
    }
    this.props.addMenuItem(dish)
    this.setState({
      dishName: ""
    })
    setTimeout(this.updateDisplay(date), 2000)
  }

  updateDisplay = date => {
    this.props.getDayMenu(date)
  }

  render() {
    const { date, types, dishes } = this.props
    return (
      <DishPicker
        date={date}
        types={types}
        dishes={dishes}
        onChange={this.onChange}
        onChangeType={this.onChangeType}
        onSubmit={this.onSubmit}
        dishName={this.state.dishName}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    types: state.types,
    dishes: state.dishes
  }
}


export default connect(
  mapStateToProps, {
  getDishes,
  addMenuItem,
  getDayMenu
})(DishPickerContainer)