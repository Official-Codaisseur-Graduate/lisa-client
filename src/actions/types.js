import request from 'superagent'
import { baseUrl } from "../constants";
export const TYPE_FETCHED = 'TYPE_FETCHED'
export const TYPES_FETCHED = 'TYPES_FETCHED'
export const CREATE_TYPE_SUCCESS = 'CREATE_TYPE_SUCCESS'
export const TYPE_DELETE_SUCCESS = 'TYPE_DELETE_SUCCESS'
export const TYPE_UPDATE_SUCCESS = 'TYPE_UPDATE_SUCCESS'

//get one type
const typeFetched = dishType => ({
    type: TYPE_FETCHED,
    dishType
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

export const getTypes = () => (dispatch) => {
    request(`${baseUrl}/types`)
        .then(response => {
            dispatch(typesFetched(response.body))
        })
        .catch(console.error)
}

//create new type
const createTypeSuccess = dishType => ({
    type: CREATE_TYPE_SUCCESS,
    dishType
})

export const createType = (type) => (dispatch) => {
    request
        .post(`${baseUrl}/types`)
        .send({type})
        .then(res => {
            dispatch(createTypeSuccess(res.body))
        })
        .catch(console.error)
}

// delete type
const typeDeleteSuccess = id => ({
    type: TYPE_DELETE_SUCCESS,
    id
})

export const deleteType = (id) => (dispatch) => {
    request
        .delete(`${baseUrl}/types/${id}`)
        .then( dispatch(typeDeleteSuccess(id))
        )
        .catch(console.error)
}

//update type
const typeUpdateSuccess = dishType => ({
    type: TYPE_UPDATE_SUCCESS,
    dishType
})

export const updateType = (id, data) => (dispatch) => {
    request
        .put(`${baseUrl}/types/${id}`)
        .send(data)
        .then(response => {
            dispatch(typeUpdateSuccess(response.body))
        })
        .catch(console.error)
}




