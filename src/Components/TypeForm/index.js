import React, { Component } from 'react'
import {connect} from 'react-redux'


export class TypeForm extends Component {
  state = {
    typeName: ''
  }

  componentDidMount = () => {
    this.props.getTypes()
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createType(this.state)
    this.setState({
      typeName: ''
    })
  }
  
  render () {
    const { onChange, onSubmit, props, state } = this
    const { types } = props
    const { type, typeName } = state
    return (
      <div className="TypeForm">
        <TypeForm 
          types={types}
          type={type}
          typeName={typeName}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTypes: dispatch => getTypes()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishForm)