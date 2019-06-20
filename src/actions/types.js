import request from 'superagent'
export const TYPE_FETCHED = 'TYPE_FETCHED'
export const TYPES_FETCHED = 'TYPES_FETCHED'

const baseUrl = 'http://localhost:4000'

//get one type
const typeFetched = type => ({
    type: TYPE_FETCHED,
    type
})

export const getType = (id) => (dispatch) => {
    request(`${baseUrl}/types/${id}`)
        .then(response => {
            dispatch(typeFetched(response.body))
        })
        .catch(console.error)
}


//get all types
const typesFetched = types => ({
    type: TYPES_FETCHED,
    types
  })
  
  export const getAllTypes = () => (dispatch, getState) => {
    if (getState().types) return;
    request(`${baseUrl}/types`)
      .then(response => {
        dispatch(typesFetched(response.body))
      })
      .catch(console.error)
  }





