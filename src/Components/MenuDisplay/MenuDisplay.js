import React from 'react'


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
          <button value={id} onClick={deleteItem} style={{ color: 'red' }}>X</button>
        </div>
      )
    })

    return (
      <div key={type} className="menuItemType">
        <h2>{type}</h2>
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
          <button value={id} onClick={deleteItem} style={{ color: 'red' }}>X</button>
        </div>
      )
    })

    return (
      <div key={type} className="menuItemType">
        <h2>{type}</h2>
        {menuItems}
      </div>
    )
  })

  return (
    <div>
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