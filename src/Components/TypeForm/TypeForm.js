import React from 'react'

function TypeForm(props) {
  const { name, onChange, onSubmit } = props

  return (
    <div>
      <form onSubmit={onSubmit}> 
        <label>
          Naam type:
          <br />
          <input className="typeFormName" type="text" value={name} required={true} onChange={onChange} name='name' />
        </label>
        <br />
        <input type="submit" value="Voeg type toe" />
      </form>  
    </div>
  );
}

export default TypeForm