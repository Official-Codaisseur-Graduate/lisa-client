import * as request from "superagent";
import { baseUrl } from "../constants";
import { SET_DAY_MENU, SET_WEEK_MENU, ITEM_MENU_DELETE } from "./";

export const setDayMenu = menu => {
  return {
    type: SET_DAY_MENU,
    menu
  };
};

// 5
export const getDayMenu = (date, locationId) => dispatch => {
  //console.log("date here", date);
  request
    //add location
    .get(`${baseUrl}/location/${locationId}/menus/?date=${date}`)
    .send(date)
    .then(res => {
      dispatch(setDayMenu(res.body));
    });
};

export const addMenuItem = (dish, locationId) => dispatch => {
  //console.log("dish date", dish);

  request
    .post(`${baseUrl}/location/${locationId}/menus`)
    .send({ dish })
    .then(res => {
      dispatch(getDayMenu(dish.date, locationId));
    });
};
export const deleteMenuItemSuccess = itemId => {
  return {
    type: ITEM_MENU_DELETE,
    itemId
  };
};
export const deleteMenuItem = (id, date) => dispatch => {
  //console.log("check id and date", id, date);
  request
    .delete(`${baseUrl}/menus/${id}`)
    .then(() => dispatch(deleteMenuItemSuccess(id)));
  // .then(() => dispatch(getDayMenu(date)));
};

export const setWeekMenu = menu => {
  return {
    type: SET_WEEK_MENU,
    menu
  };
};

export const getWeekMenu = (date, locationId) => dispatch => {
  request
    .get(`${baseUrl}/location/${locationId}/menu/week/${date}`)
    .then(res => dispatch(setWeekMenu(res.body)));
};
