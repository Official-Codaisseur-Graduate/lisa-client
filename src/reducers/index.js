import {combineReducers} from 'redux'
import type from './type'
import types from './types'
import dishes from './dishes'

export default combineReducers({
    type,
    types,
    dishes
})