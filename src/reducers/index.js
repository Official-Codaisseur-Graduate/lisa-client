import { combineReducers } from 'redux';
import type from './type';
import types from './types';
import dishes from './dishes';
import date from './date';
import menu from './menu';
import weekMenu from './weekmenu';
import locationReducer from './locationReducer'
import currentLocation from './currentLocation'

export default combineReducers({
	type,
	types,
	dishes,
	date,
	menu,
	weekMenu,
	locationReducer,
	currentLocation
});
