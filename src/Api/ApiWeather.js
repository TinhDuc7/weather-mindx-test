import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '7779ea283945f6a64ff30a04a1f3526a';

export const apiweather = async (city) => {
    const { data } = await axios.get(BASE_URL, {
        params: {
            q: city,
            units: "metric",
            APPID: API_KEY,
        },
    });
    return data;
}