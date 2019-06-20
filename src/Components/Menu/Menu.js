import React from 'react';
import '../App/App.css';

// import DateForm from '../DateForm'
// import DishForm from '../DishForm'
import TypeForm from '../TypeForm'
// import MenuForm from './MenuForm'

function Menu() {
  return (
    <div className="Menu">
      <div className="sideBar">
        {/* <DateForm /> */}
        {/* <DishForm /> */}
        <TypeForm />
      </div>
      {/* <MenuForm /> */}
    </div>
  );
}

export default Menu;
