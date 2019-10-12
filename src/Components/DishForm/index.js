import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTypes } from '../../actions/types'
import { createDish } from '../../actions/dishes'

import DishForm from './DishForm'

export class DishFormContainer extends Component {
  state = {
    typeId: '',
    dishName: ''
  }

  componentDidMount = () => {
    this.props.getTypes()
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    const { typeId, dishName } = this.state
    const dish = { typeId, dishName }
    await this.props.createDish(dish)
    await this.setState({
      // typeId: "",
      dishName: ""
    })
  }

  render() {
    const { onChange, onSubmit, props, state } = this
    const { types } = props
    const { typeId, dishName } = state
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
    )
  }
}

const mapStateToProps = state => {
  return {
    types: state.types
  }
}


export default connect(
  mapStateToProps,
  {
    getTypes,
    createDish
  })(DishFormContainer)