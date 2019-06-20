import React from 'react'

function TypeForm(props) {
  const { typeName, onChange, onSubmit } = props

  return (
    <div className="TypeForm">
      <form onSubmit={onSubmit}> 
        <label>
          Naam type:
          <input type="text" onChange={onChange} name={typeName} />
        </label>
        <input type="submit" value="Voeg type toe" />
      </form>  
    </div>
  );
}

export default TypeForm