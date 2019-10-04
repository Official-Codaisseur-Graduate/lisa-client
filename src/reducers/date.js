import { SET_DATE, SET_WEEK_DATE } from '../actions/';

const initialState = {
	date: null,
	weekDates: null
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_DATE:
			return { ...state, date: action.date };
		case SET_WEEK_DATE:
			return { ...state, weekDates: action.dates };
		default:
			return state;
	}
};

export default reducer;
