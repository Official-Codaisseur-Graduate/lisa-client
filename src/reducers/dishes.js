import { DISHES_FETCHED, ADD_DISH_SUCCESS, DISH_DELETE_SUCCESS } from '../actions/dishes'

export default function (state = null, action) {
  switch(action.type) {
    case DISHES_FETCHED:
      return action.dishes;
    case ADD_DISH_SUCCESS:
      return state 
    case DISH_DELETE_SUCCESS:
        return state.filter(dish => dish.id !== action.id)
    default:
      return state
  }
}

export const DISH_UPDATE_SUCCESS = "DISH_UPDATE_SUCCESS"
export const DISH_FETCHED = "DISH_FETCHED"