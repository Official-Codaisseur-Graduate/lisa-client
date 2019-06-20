import { TYPES_FETCHED, CREATE_TYPE_SUCCESS } from '../actions/types'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case TYPES_FETCHED:
            return action.types;
        case CREATE_TYPE_SUCCESS:
            return [...state, action.type];
        default:
            return state;
    }
}

export default reducer;