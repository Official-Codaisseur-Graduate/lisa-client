import { TYPE_FETCHED, TYPE_UPDATE_SUCCESS } from '../actions/types'


const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case TYPE_FETCHED:
            return action.type;
        case TYPE_UPDATE_SUCCESS:
            return action.type
        default:
            return state;
    }
}

export default reducer;