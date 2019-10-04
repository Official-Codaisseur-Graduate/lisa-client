import { SET_DATE, SET_WEEK_DATE } from '.';

export const setDate = (date) => {
	return {
		type: SET_DATE,
		date
	};
};

export const setWeekDate = (dates) => {
	return {
		type: SET_WEEK_DATE,
		dates
	};
};
