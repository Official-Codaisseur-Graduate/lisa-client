import { SET_DAY_MENU, ITEM_MENU_DELETE } from "../actions/";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case SET_DAY_MENU:
      return action.menu;
    case ITEM_MENU_DELETE:
      return state.filter(item => item.id !== Number(action.itemId));
    default:
      return state;
  }
};

export default reducer;
