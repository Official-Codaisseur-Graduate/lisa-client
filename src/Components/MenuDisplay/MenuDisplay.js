import React from 'react'


function MenuDisplay(props) {
  const { menu, deleteItem } = props
  const groupedMenuItems = menu 
    && menu
      .sort((a, b) => (a.id > b.id) ? 1 : -1)
      .reduce((groupedMenuItems, currentItem) => {
        if (!groupedMenuItems[currentItem.type_name]) {
          groupedMenuItems = {...groupedMenuItems, [currentItem.type_name]: []}
        }
        groupedMenuItems[currentItem.type_name].push(currentItem)
        return groupedMenuItems
      }, {})
  const menuItemsByType= groupedMenuItems && Object.keys(groupedMenuItems).map(type => {

    const menuItems = groupedMenuItems[type].map(menuItem => {
      const { dish_name, date, id } = menuItem
      return (
        <div className="menuItem" key={id}>
          <p key={id}>{dish_name}</p>
          <button value={id} onClick={deleteItem} style={{color: 'red'}}>X</button>
        </div>
      )
    })

    return (
      <div className="menuItemType">
        <h2 key={type}>{type}</h2>
        {menuItems}
      </div>
    )
  })
  return (
    <div>
      {menuItemsByType ? menuItemsByType : "Loading..." }
    </div>
  );
}

export default MenuDisplay