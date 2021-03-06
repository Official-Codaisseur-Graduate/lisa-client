import { GET_LOCATIONS } from '../actions/';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case GET_LOCATIONS:
            return action.payload
        default:
            return state;
    }
};

export default reducer;