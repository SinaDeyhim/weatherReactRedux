import { combineReducers } from 'redux';
import WeatherRducer from './reducer_weather';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  weather:WeatherRducer
});

export default rootReducer;
