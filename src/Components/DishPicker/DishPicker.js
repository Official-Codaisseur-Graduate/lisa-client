import React from 'react'

function DishPicker(props) {
  const { dishes, types, onChangeType, onChange, onSubmit, dishName, date } = props
  console.log('DishPicker Date:', date)
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
      <form className='form-group' onSubmit={onSubmit}>
        <label>
          Type gerecht:
          <br />
          <select className="dishPickerType" name="typeName" onChange={e => {
            // e.persist()
            const id = e.target.value;
            onChangeType(id);
          }}>
            <option value="" defaultValue=''>Kies een type</option>
            {typeOptions}
          </select>
        </label>
        <br />
        <label>
          Gerecht:
          <br />
          <select className="dishPickerName" name="dishName" required={true} onChange={onChange} value={dishName}>
            <option value="" defaultValue=''>Kies een gerecht</option>
            {dishOptions}
          </select>
        </label>
        <br />
        {date ?
            <input type="submit" className='btn btn-outline-info' value="Voeg gerecht toe" />
            :
            <React.Fragment>
            <span>Selecteer eerst een datum</span>
            <input type="submit" className='btn btn-outline-info' value="Voeg gerecht toe" disabled />
            </React.Fragment>
        }
        {/*  <button onClick={props.onDelete} style={{ color: 'red' }}>X</button>*/}
      </form>
    </div>
  );
}

export default DishPicker