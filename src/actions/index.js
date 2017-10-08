import axios from 'axios';
const API_KEY = 'b1a28af50b1703a8c9b538b0aec5af29';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}