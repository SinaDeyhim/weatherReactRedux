import {FETCH_WEATHER} from '../actions/index';

//reducers are functions

export default function(state=[], action) {
  if (action.error) {
  alert("City not found!");
  return state;
  }

  switch (action.type) {
    case FETCH_WEATHER:
    // return a new array including the new city. Never manipulate the state directly
    // es5: return state.concat([action.payload.data]);
    // es6:
    return [action.payload.data, ...state];

  }
  return state;
}
