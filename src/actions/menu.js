import * as request from 'superagent';
import { baseUrl } from '../constants';
import { SET_DAY_MENU, SET_WEEK_MENU } from './';

export const setDayMenu = (menu) => {
  return {
    type: SET_DAY_MENU,
    menu
  };
};

export const getDayMenu = (date) => (dispatch) => {
  request
    .get(`${baseUrl}/menus/?date=${date}`)
    .send(date)
    .then((res) => {
      dispatch(setDayMenu(res.body));
    });
};

export const addMenuItem = (dish) => (dispatch) => {
  request.post(`${baseUrl}/menus`).send({ dish }).then((res) => {
    dispatch(getDayMenu(dish.date));
  });
};

export const deleteMenuItem = (id, date) => (dispatch) => {
  request.delete(`${baseUrl}/menus/${id}`)
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
