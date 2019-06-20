import React, { Component } from 'react'
import {connect} from 'react-redux'

import Menu from './Menu'


export class MenuContainer extends Component {
  componentDidMount () {

  }
  
  render () {
    return (
      <Menu /> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)