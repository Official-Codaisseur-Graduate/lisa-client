import React, { Component } from 'react'
import {connect} from 'react-redux'

import MenuDisplay from './MenuDisplay'


export class MenuDisplayContainer extends Component {
  componentDidMount () {

  }
  
  render () {
    const { menu, types } = this.props
    return (
      <div className="MenuDisplay">
        <MenuDisplay
          menu={menu}
          types={types}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    types: state.types
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  {

  })(MenuDisplayContainer)