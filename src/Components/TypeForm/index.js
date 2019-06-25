import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createType } from '../../actions/types'
import TypeForm from './TypeForm'


export class TypeFormContainer extends Component {
  state = {
    name: ''
  }

  componentDidMount = () => {
  }

  onChange = (event) => {
    console.log('event', this.state.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log('typeName', this.state.name);
    this.props.createType(this.state)
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
    createType
  })(TypeFormContainer)