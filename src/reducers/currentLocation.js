import { SET_LOCATION_ID } from "../actions/";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case SET_LOCATION_ID:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
