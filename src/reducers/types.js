import { TYPES_FETCHED, CREATE_TYPE_SUCCESS, TYPE_DELETE_SUCCESS } from '../actions/types'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case TYPES_FETCHED:
            return action.types;
        case CREATE_TYPE_SUCCESS:
            return [...state, action.dishType];
        case TYPE_DELETE_SUCCESS:
            return state.filter(type => type.id !== action.id)
        default:
            return state;
    }
}

export default reducer;