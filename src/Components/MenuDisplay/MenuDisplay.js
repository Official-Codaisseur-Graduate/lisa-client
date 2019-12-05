import React from 'react'
import './MenuDisplay.css';
import ExportToPDFbtn from '../OneDayPdf/ExportToPDFbtn';


function MenuDisplay(props) {
  const { menu, deleteItem } = props

  const toTypeId = {
    "Voorgerecht 1": 1,
    "Hoofdgerecht 1": 2,
    "Voorgerecht 2": 3,
    "Hoofdgerecht 2": 4,
    "Saus 1": 5,
    "Saus 2": 6,
    "Bijgerecht 1": 7,
    "Bijgerecht 2": 8,
    "Nagerecht 1": 9,
    "Nagerecht 2": 10
  }

  const groupedMenuItems = menu
    && menu
      .sort((a, b) => (a.id > b.id) ? 1 : -1)
      .reduce((groupedMenuItems, currentItem) => {
        const option = currentItem.type_name.split(" ")[1]
        if (!groupedMenuItems[option][currentItem.type_name]) {
          groupedMenuItems[option] = { ...groupedMenuItems[option], [currentItem.type_name]: [] }
        }
        groupedMenuItems[option][currentItem.type_name].push(currentItem)
        return groupedMenuItems
      }, { "1": [], "2": [] })

  const menuItemsByTypeOne = groupedMenuItems["1"] && Object.keys(groupedMenuItems["1"]).map(type => {
    const menuItems = groupedMenuItems["1"][type].map(menuItem => {
      const { dish_name, id } = menuItem
      return (
        <div className="menuItem" key={id}>
          <p key={id}>{dish_name}</p>
          <button type="button" className="btn btn-outline-danger btn-sm" value={id} onClick={deleteItem} >Delete</button>
        </div>
      )
    })


    return (
      <div key={toTypeId[type]} className="menuItemType">
        <h5>{type}</h5>
        {menuItems}
      </div>
    )
  })

  const menuItemsByTypeTwo = groupedMenuItems["2"] && Object.keys(groupedMenuItems["2"]).map(type => {
    const menuItems = groupedMenuItems["2"][type].map(menuItem => {
      const { dish_name, id } = menuItem
      return (
        <div className="menuItem" key={id}>
          <p key={id}>{dish_name}</p>
          <button type="button" className="btn btn-outline-danger btn-sm" value={id} onClick={deleteItem} >Delete</button>
        </div>
      )
    })

    return (
      <div key={toTypeId[type]} className="menuItemType">
        <h5>{type}</h5>
        {menuItems}
      </div>
    )
  })

  const sort = (array) => {
    array.sort(function(a, b){
      return a.key - b.key
    })
    return array
  } 

  return (
      <div>
      <h2 className='menu-title'>Menu van de Dag </h2>
      
      {menuItemsByTypeOne && menuItemsByTypeTwo
        ? <div className="menuOptions">
          <div className="menuOption">{sort(menuItemsByTypeOne)}</div>
          <div className="menuOption">{sort(menuItemsByTypeTwo)}</div>
        </div>
        : "Aan het laden..."}
    
    <ExportToPDFbtn />
    </div>
  );
}

export default MenuDisplay