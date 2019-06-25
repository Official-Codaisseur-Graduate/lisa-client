import React, { Component } from 'react'
import {connect} from 'react-redux'

import DishPicker from './DishPicker'

import { getDishes } from '../../actions/dishes'


export class DishPickerContainer extends Component {
  state = {
    typeName: '',
    dishName: '',
  }
  
  componentDidMount () {

  }

  onChangeType = (event) => {
    // event.preventDefault()
    console.log("DISHPICKER ONCHANGE EVENT", event)
    const { types } = this.props
    const id = event.target.value
    this.setState({
      [event.target.name]: types.find(type => type.id === event.target.value).name
    })
    this.props.getDishes(id)
      
  }


  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    const { typeId, dishName } = this.state
    const dish = { typeId, dishName }
    this.props.createDish(dish)
    this.setState({
      typeName: "",
      dishName: ""
    })
  }
  
  render () {
    const { date, types } = this.props
    console.log("ONCHANGETYPE RENDER", this.onChangeType)
    return (
      <DishPicker 
        date={date}
        types={types}
        onChangeType={this.onChangeType}
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
  getDishes
})(DishPickerContainer)