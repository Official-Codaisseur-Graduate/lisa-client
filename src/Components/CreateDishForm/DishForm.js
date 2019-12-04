import React from 'react'

function DishForm(props) {
  //console.log('DishForm(props)',props)
  const { types, onChange, onSubmit, dishName } = props
  const typeOptions = types && types.map(type => {
    const { name, id } = type
    return (
      <option key={id} value={id}>{name}</option>
    )
  })
  return (
    <div>
      <form onSubmit={onSubmit}> 
        <label>
          Type gerecht:
          <br />
          <select className="dishFormType" name="typeId" onChange={onChange}> 
          <option value="" defaultValue="">Kies een type</option>            {typeOptions}
          </select>
        </label>
        <br />
        <label>
          Naam gerecht:
          <br />
          <input className="dishFormName" type="text" onChange={onChange} required={true} value={dishName} name="dishName" />
        </label>
        <br />
        <input type="submit" value="Voeg gerecht toe" />
      </form>  
    </div>
  );
}

export default DishForm