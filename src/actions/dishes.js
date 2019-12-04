import * as request from "superagent";
import { baseUrl } from "../constants";
import {
  DISHES_FETCHED,
  ADD_DISH_SUCCESS,
  DISH_UPDATE_SUCCESS,
  DISH_FETCHED
} from "./";

//loads dishes based on an event
export const getDishes = (type, locationId) => (dispatch, getState) => {
  request(`${baseUrl}/location/${locationId}/dishes?type=${type}`)
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
export const getDish = (id, locationId) => dispatch => {
  request(`${baseUrl}/location/${locationId}/types/${id}`)
    .then(response => {
      dispatch(dishFetched(response.body));
    })
    .catch(console.error);
};

const dishFetched = dish => ({
  type: DISH_FETCHED,
  dish
});

// add a dish of a type
export const createDish = (dish, locationId) => dispatch => {
  request
    .post(`${baseUrl}/location/${locationId}/createDish`)
    .send({ dish })
    .then(res => dispatch(addDishSuccess(res.body)))
    .catch(err => {
      console.error(err);
    });
};

const addDishSuccess = dish => ({
  type: ADD_DISH_SUCCESS,
  dish
});

// delete dish
export const deleteDish = id => dispatch => {
  request
    .delete(`${baseUrl}/dishes/${id}`)
    .catch(console.error);
};

//update dish
const dishUpdateSuccess = dish => ({
  type: DISH_UPDATE_SUCCESS,
  dish
});

export const updateDish = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/dishes/${id}`)
    .send(data)
    .then(response => {
      dispatch(dishUpdateSuccess(response.body));
    })
    .catch(console.error);
};
