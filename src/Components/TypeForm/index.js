import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createType, getTypes } from '../../actions/types'
import TypeForm from './TypeForm'


export class TypeFormContainer extends Component {
  state = {
    name: ''
  }

  componentDidMount = () => {
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    await this.props.createType(this.state)
    this.props.getTypes()
    this.setState({
      name: ''
    })
   
  }
  
  render () {
    const { onChange, onSubmit} = this
    const { name } = this.state
    return (
      <div className="TypeForm">
        <TypeForm 
          name={name}
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


export default connect(
  mapStateToProps,
  { 
    createType, getTypes
  })(TypeFormContainer)