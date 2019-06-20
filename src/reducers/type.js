import { TYPE_FETCHED } from '../actions/types'


const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case TYPE_FETCHED:
            return action.type;
        default:
            return state;
    }
}

export default reducer;