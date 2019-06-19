import React, { Component } from 'react'
import {connect} from 'react-redux'


export class DishForm extends Component {
  componentDidMount () {

  }
  
  render () {
    return (
      <div className="DishForm">

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
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishForm)