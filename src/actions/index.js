import axios from 'axios';

const API_KEY= "b2ebfc24fe16a735a878d3ecd0cfaa1a";

// use a variable or the type to avoid bugs when typing strings
export const FETCH_WEATHER= 'FETCH_WEATHER';

// weather url

const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



//action creator; return an object and always has a type proprty
export function fetchWeather(city){

  const url =`${ROOT_URL}&q=${city},ca&units=metric`//&units=metric

//error handling should be done otherwise a typo wil crash the app
  const request = axios.get(url);

  return {
        type: FETCH_WEATHER,
        payload: request

  };
}
