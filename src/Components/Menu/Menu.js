import React from 'react';
import './Menu.css';

import Calendar from 'react-calendar'
import DishPicker from '../DishPicker'
import DishForm from '../DishForm'
import TypeForm from '../TypeForm'
// import MenuForm from './MenuForm'

function Menu(props) {
  const { changeDate } = props
  console.log('PROPS', props)
  return (
    <div className="Menu">
      <div className="menuBar">
        <h1 className="appHeader">Vitalis Menu Editor</h1>
      </div>
      <div className="sideBar">
        <div className="Calendar">
          <Calendar 
            locale="nl-NL"
            onClickDay={date => props.changeDate(date)}
          />
        </div>
        <DishPicker />
        <DishForm />
        <TypeForm />
      </div>
      {/* <MenuForm /> */}
    </div>
  );
}

export default Menu;
