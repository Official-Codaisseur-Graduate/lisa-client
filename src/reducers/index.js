import { combineReducers } from 'redux';
import type from './type';
import types from './types';
import dishes from './dishes';
import date from './date';
import menu from './menu';
import weekMenu from './weekmenu';
import locationReducer from './locationReducer'

export default combineReducers({
	type,
	types,
	dishes,
	date,
	menu,
	weekMenu,
	locationReducer
});
