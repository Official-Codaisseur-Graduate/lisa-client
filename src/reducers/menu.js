import { 
  SET_DAY_MENU 
} from '../actions/'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case SET_DAY_MENU:
          return action.menu
        default:
            return state;
    }
}

export default reducer;