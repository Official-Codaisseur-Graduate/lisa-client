import { 
  SET_DATE 
} from '../actions/'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case SET_DATE:
          return action.date
        default:
            return state;
    }
}

export default reducer;