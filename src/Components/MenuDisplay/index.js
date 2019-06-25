import React, { Component } from 'react'
import {connect} from 'react-redux'

import MenuDisplay from './MenuDisplay'


export class MenuDisplayContainer extends Component {
  componentDidMount () {

  }
  
  render () {
    const { menu, types, date } = this.props
    return (
      <div className="MenuDisplay">
        {
          !date 
          ? "Please select a date..." 
          : !menu || menu.length === 0
          ? 'No menu for this day yet!' 
          : <MenuDisplay
            menu={menu}
            types={types}
          />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    types: state.types,
    date: state.date
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