import * as request from "superagent";
import { baseUrl } from "../constants";
import { GET_LOCATIONS } from "./";

export const getLocationActions = payload => {
  return {
    type: GET_LOCATIONS,
    payload: payload
  };
};
export const getLocations = () => dispatch => {
  request
    //add location
    .get(`${baseUrl}/locations`)
    .then(res => {
      dispatch(getLocationActions(res.body));
    });
};
