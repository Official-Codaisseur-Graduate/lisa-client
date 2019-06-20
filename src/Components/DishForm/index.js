import React, { Component } from 'react'
import {connect} from 'react-redux'


export class DishForm extends Component {
  state = {
    type: '',
    dishName: ''
  }

  componentDidMount = () => {
    // this.props.getDishes()
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createDish(this.state)
    this.setState({
      type: '',
      name: ''
    })
  }
  
  render () {
    const { onChange, onSubmit, props, state } = this
    const { types } = props
    const { type, dishName } = state
    return (
      <div className="DishForm">
        <DishForm 
          types={types}
          type={type}
          dishName={dishName}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    types: state.types
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDishes: dispatch => getDishes()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishForm)