
import  axios from 'axios';

const API_KEY = '9ef9edd36466584852f5249018155ddb';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const HEROKU_PROXY = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`  ;

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}