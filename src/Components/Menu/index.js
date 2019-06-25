import React, { Component } from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import Menu from './Menu'

import { setDate } from '../../actions/date'
import { getDayMenu } from '../../actions/menu'


export class MenuContainer extends Component {
  componentDidMount () {

  }

  changeDate = (currentDate) => {
    const date = moment(currentDate).format("YYYY-MM-DD")
    // Set date in Redux Store
    this.props.setDate(date)

    // Get-request to get all dishes for this date
    this.props.getDayMenu(date)
  }  

  render () {
    return (
      <Menu
        changeDate={this.changeDate}
      /> 
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

export default connect(
  mapStateToProps, 
  {
    setDate,
    getDayMenu
  })(MenuContainer)