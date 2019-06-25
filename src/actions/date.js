import {
  SET_DATE 
} from '.'

export const setDate = (date) => {
  return ({
    type: SET_DATE,
      date
  })
}