import request from 'superagent'
export const TYPE_FETCHED = 'TYPE_FETCHED'
export const TYPES_FETCHED = 'TYPES_FETCHED'
export const CREATE_TYPE_SUCCESS = 'CREATE_TYPE_SUCCESS'

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

//create new type
const createTypeSuccess = type => ({
    type: CREATE_TYPE_SUCCESS,
    type
})

export const createType = (data) => (dispatch) => {
    request
        .post(`${baseUrl}/types`)
        .send(data)
        .then(response => {
            dispatch(createTypeSuccess(response.body))
        })
        .catch(console.error)
}




