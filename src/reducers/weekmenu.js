import { SET_WEEK_MENU } from '../actions/';

const reducer = (state = null, action = {}) => {
	switch (action.type) {
		case SET_WEEK_MENU:
			return action.menu;
		default:
			return state;
	}
};

export default reducer;
