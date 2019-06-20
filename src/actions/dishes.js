import * as request from "superagent";
import { baseUrl } from "../constants";

export const DISHES_FETCHED = "DISHES_FETCHED";
export const ADD_DISH_SUCCESS = "ADD_DISH_SUCCESS"
export const DISH_UPDATE_SUCCESS = "DISH_UPDATE_SUCCESS"
export const DISH_DELETE_SUCCESS = "DISH_DELETE_SUCCESS"
export const DISH_FETCHED = "DISH_FETCHED"

//loads dishes based on an event
export const loadDishes = () => (dispatch, getState) => {
  if (getState().dishes) return;
  request(`${baseUrl}/dishes`)
    .then(result => {
      dispatch(dishesFetched(result.body));
    })
    .catch(console.error);
};

const dishesFetched = dishes => ({
  type: DISHES_FETCHED,
  dishes
});

//loads one dish based on dish id 
export const getDish = (id) => (dispatch) => {
  request(`${baseUrl}/types/${id}`)
      .then(response => {
          dispatch(dishFetched(response.body))
      })
      .catch(console.error)
}

const dishFetched = dish => ({
  type: DISH_FETCHED,
  dish
})

// add a dish of a type
export const addDish = (typeId, dishName) => dispatch => {
  const data = { typeId, dishName };
  request
    .post(`${baseUrl}/dishes`)
    .send(data)
    .then(res => {
      dispatch(addDishSuccess(res.body));
    })
    .catch(err => {
      console.error(err);
    });
};

const addDishSuccess = dish => ({
  type: ADD_DISH_SUCCESS,
  payload: dish
});

// delete dish
const dishDeleteSuccess = id => ({
  type: DISH_DELETE_SUCCESS,
  id
})

export const deleteDish = (id) => (dispatch) => {
  request
      .delete(`${baseUrl}/dishes/${id}`)
      .then( dispatch(dishDeleteSuccess(id))
      )
      .catch(console.error)
}

//update dish
const dishUpdateSuccess = dish => ({
  type: DISH_UPDATE_SUCCESS,
  dish
})

export const updateDish = (id, data) => (dispatch) => {
  request
      .put(`${baseUrl}/dishes/${id}`)
      .send(data)
      .then(response => {
          dispatch(dishUpdateSuccess(response.body))
      })
      .catch(console.error)
}
