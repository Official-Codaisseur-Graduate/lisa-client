import React from 'react'

function DishForm(props) {
  const { types, onChange, onSubmit } = props
  const typeOptions = types && types.map(type => {
    const { name, id } = type
    return (
      <option key={id} value={id}>{name}</option>
    )
  })
  return (
    <div className="DishForm">
      <form onSubmit={onSubmit}> 
        <label>
          Type gerecht:
          <select name="typeId" onChange={onChange}> 
          <option value="" defaultValue="">Kies een type</option>            {typeOptions}
          </select>
        </label>
        <label>
          Naam gerecht:
          <input type="text" onChange={onChange} name="dishName" />
        </label>
        <input type="submit" value="Voeg gerecht toe" />
      </form>  
    </div>
  );
}

export default DishForm