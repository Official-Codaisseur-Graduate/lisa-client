import React from 'react'

const RenderOptions = (props) => {
  return props.types.map(type => {
    const { name, id } = type
    return (
      <option key={id} value={id}>{name}</option>
    )
  })
}

function DishPicker(props) {
  const { dishes, types, onChangeType, onSubmit } = props
  console.log("WHAT IS ONCHANGE?!", onChangeType)
  const typeOptions = types && types.map(type => {
    const { name, id } = type
    return (
      <option key={id} value={id}>{name}</option>
    )
  })
  const dishOptions = dishes && dishes.map(dish => {
    const { name, id } = dish
    return (
      <option key={id} value={name}>{name}</option>
    )
  })
  return (
    <div className="DishPicker">
      <form onSubmit={onSubmit}> 
        <label onClick={onChangeType}>
          Type gerecht:
          <br />
          <select className="dishPickerType" name="typeName" onChange={(e) => onChangeType(e)}> 
            <option value="" defaultValue="">Kies een type</option>
            {typeOptions}
            {props.types && <RenderOptions {...props} />}
          </select>
        </label>
        <br />
        <label>
          Gerecht:
          <br />
          <select className="dishPickerName" name="dishName" onChange={null}> 
            <option value="" defaultValue="">Kies een gerecht</option>            
            {dishOptions}
          </select>
        </label>
        <br />
        <input type="submit" value="Voeg gerecht toe" />
      </form>  
    </div>
  );
}

export default DishPicker