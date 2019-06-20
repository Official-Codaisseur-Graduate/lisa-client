import { DISH_FETCHED, DISH_UPDATE_SUCCESS } from '../actions/dishes'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case DISH_FETCHED:
            return action.payload;
        case DISH_UPDATE_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export default reducer;