import React from 'react'

function TypeForm(props) {
  const { name, onChange, onSubmit } = props

  return (
    <div className="TypeForm">
      <form onSubmit={onSubmit}> 
        <label>
          Naam type:
          <input type="text" value={name} onChange={onChange} name='name' />
        </label>
        <input type="submit" value="Voeg type toe" />
      </form>  
    </div>
  );
}

export default TypeForm