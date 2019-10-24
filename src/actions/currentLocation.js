
import { SET_LOCATION_ID } from './';

export const setLocationId = (locationId) => {
    return {
        type: SET_LOCATION_ID,
        payload: locationId
    };
};