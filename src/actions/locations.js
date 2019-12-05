import * as request from "superagent";
import { baseUrl } from "../constants";
import { GET_LOCATIONS, SET_LOCATION_ID } from "./";

// get all locations
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

// set current location with your selection
export const setLocationId = locationId => {
  return {
    type: SET_LOCATION_ID,
    payload: locationId
  };
};
