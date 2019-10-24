import * as request from 'superagent';
import { baseUrl } from '../constants';
import { SET_DAY_MENU, SET_WEEK_MENU } from './';

export const setDayMenu = (menu) => {
  return {
    type: SET_DAY_MENU,
    menu
  };
};

export const getDayMenu = (date, locationName) => (dispatch) => {
  request
  //add location
    .get(`${baseUrl}/location/${locationName}/menus/?date=${date}`)
    .send(date)
    .then((res) => {
      dispatch(setDayMenu(res.body));
    });
};

export const addMenuItem = (dish, locationName) => (dispatch) => {

  request.post(`${baseUrl}/location/${locationName}/menus`).send({ dish }).then((res) => {
    dispatch(getDayMenu(dish.date));
  });
};

export const deleteMenuItem = (id, date, locationName) => (dispatch) => {
  request.delete(`${baseUrl}/location/${locationName}/menus/${id}`)
    .then(() => {
      return dispatch(getDayMenu(date));
    });
};

export const setWeekMenu = (menu) => {
  return {
    type: SET_WEEK_MENU,
    menu
  };
};

export const getWeekMenu = (date) => (dispatch) => {
  request
    .get(`${baseUrl}/menu/week/${date}`)
    .then((res) => dispatch(setWeekMenu(res.body)));
};
