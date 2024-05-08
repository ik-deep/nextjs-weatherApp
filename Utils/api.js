// utils/api.js
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export const getWeatherData = async (city) => {
const options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
        aggregateHours: '24',
        location: city,
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: 0,
    },
    headers: {
        'X-RapidAPI-Key': 'f8de3cb8d7msh3012301a9ef3370p1d3e45jsn281bf2009890',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
}

try {
    const response = await axios.request(options);
    console.log(response.data)
    const thisData = Object.values(response.data.locations)[0]
    // setLocation(thisData.address)
    // setValues(thisData.values)
    // setWeather(thisData.values[0])
    console.log(thisData)
    return thisData;
} catch (e) {
    console.error(e);
    // if the api throws error.
    alert('This place does not exist')
}
};
