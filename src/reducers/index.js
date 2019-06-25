import {combineReducers} from 'redux'
import type from './type'
import types from './types'
import dishes from './dishes'
import date from './date'
import menu from './menu'

export default combineReducers({
    type,
    types,
    dishes,
    date,
    menu
})