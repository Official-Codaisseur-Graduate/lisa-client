import * as request from "superagent";
import { baseUrl } from "../constants";

export const DISHES_FETCHED = "DISHES_FETCHED";
export const ADD_DISH_SUCCESS = "ADD_DISH_SUCCESS"

//loads types based on an event
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
