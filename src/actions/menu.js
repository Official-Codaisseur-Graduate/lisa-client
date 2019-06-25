import * as request from "superagent";
import { baseUrl } from "../constants";
import {
  SET_DAY_MENU
} from './'

export const setDayMenu = menu => {
  return ({
    type: SET_DAY_MENU,
    menu
  })
}

export const getDayMenu = date => dispatch => {
  console.log("GET REQ DATE", date)
  request
    .get(`${baseUrl}/menus/?date=${date}`)
    .send(date)
    .then(res => {
      console.log("RESPONSE: ", res.body)
      const { menu } = res.body
      dispatch(setDayMenu(res.body))
    })
}

export const addMenuItem = dish => dispatch => {
  console.log("ADD TO MENU: ", dish)
  request
    .post(`${baseUrl}/menus`)
    .send({dish})
    .then(res => {
      console.log(res.body)
      dispatch(getDayMenu(dish.date))
    })
}
