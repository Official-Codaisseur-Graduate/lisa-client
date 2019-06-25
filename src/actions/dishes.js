import * as request from "superagent";
import { baseUrl } from "../constants";
import { 
  DISHES_FETCHED,
  ADD_DISH_SUCCESS,
  DISH_UPDATE_SUCCESS,
  DISH_DELETE_SUCCESS,
  DISH_FETCHED 
} from './'

//loads dishes based on an event
export const getDishes = (type) => (dispatch, getState) => {
  console.log("DISH GET REQ TYPE", type)
  if (getState().dishes) return;
  request(`${baseUrl}/dishes?type=${type}`)
    .then(result => {
      console.log('RESULT?! ', result)
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
export const createDish = dish => dispatch => {
  console.log('DISH', dish)
  request
    .post(`${baseUrl}/dishes`)
    .send({dish})
    .then(res => {
      console.log(res)
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
