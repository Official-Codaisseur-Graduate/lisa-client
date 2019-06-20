import { TYPES_FETCHED } from '../actions/types'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case TYPES_FETCHED:
            return action.events;
        default:
            return state;
    }
}

export default reducer;