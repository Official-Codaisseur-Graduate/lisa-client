import React from 'react'
import './MenuDisplay.css';


function MenuDisplay(props) {
  const { menu, deleteItem } = props

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
      <div key={type} className="menuItemType">
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
      <div key={type} className="menuItemType">
        <h5>{type}</h5>
        {menuItems}
      </div>
    )
  })

  return (
    <div>
      <h2 className='menu-title'>Menu van de Dag </h2>
      {menuItemsByTypeOne && menuItemsByTypeTwo
        ? <div className="menuOptions">
          <div className="menuOption">{menuItemsByTypeOne}</div>
          <div className="menuOption">{menuItemsByTypeTwo}</div>
        </div>
        : "Aan het laden..."}
    </div>
  );
}

export default MenuDisplay