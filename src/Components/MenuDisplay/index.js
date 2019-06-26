import React, { Component } from 'react'
import {connect} from 'react-redux'

import MenuDisplay from './MenuDisplay'

import { deleteMenuItem } from '../../actions/menu'


export class MenuDisplayContainer extends Component {
  componentDidMount () {

  }
  
  deleteItem = (event) => {
    const id = event.target.value
    const { date } = this.props
    this.props.deleteMenuItem(id, date)
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
            deleteItem={this.deleteItem}
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

export default connect(
  mapStateToProps,
  {
    deleteMenuItem
  })(MenuDisplayContainer)