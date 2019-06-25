import React from 'react'


function MenuDisplay(props) {
  const { menu } = props
  const groupedMenuItems = menu && menu.reduce((groupedMenuItems, currentItem) => {
    if (!groupedMenuItems[currentItem.type_name]) {
      groupedMenuItems = {...groupedMenuItems, [currentItem.type_name]: []}
    }
    groupedMenuItems[currentItem.type_name].push(currentItem)
    return groupedMenuItems
  }, {})
  const menuItemsByType= groupedMenuItems && Object.keys(groupedMenuItems).map(type => {

    const menuItems = groupedMenuItems[type].map(menuItem => {
      const { dish_name, id } = menuItem
      return (
        <p key={id}>{menuItem.dish_name}</p>
      )
    })

    return (
      <div className="menuItemType">
        <h2 key={type}>{type}</h2>
        {menuItems}
      </div>
    )
  })
  console.log(menuItemsByType)
  // const menuItems = menu && menu.map(menuItem => {
  //   const { id, dish_name, type_name } = menuItem
  //   return <p key={id}>{type_name}: {dish_name}</p>
  // })
  return (
    <div>
      {/* {menuItems ? menuItems : "Loading..." } */}
      {menuItemsByType ? menuItemsByType : "Loading..." }
      {/* {console.log("????", menuItemsByType)} */}
    </div>
  );
}

export default MenuDisplay