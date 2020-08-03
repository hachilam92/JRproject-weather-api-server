const axios = require('axios');
const {City, Weather, ForecastList, Response} = require('./classes');
const openWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});
const appid =`${process.env.appid}`;      // Fill in API key

let currentWeather;
let forecastWeather;


function getCurrent (location) {
    currentWeather = openWeather.get('/weather', {
        params: { 
            q: location,
            appid: appid
        }
    });
    return currentWeather;
}

function getForecast (location) {
    forecastWeather = openWeather.get('/forecast', {
        params: { 
            q: location,
            appid: appid
        }
    });
    return forecastWeather;
}

function getWeather (location, weatherType, res) {
    Promise.all([getCurrent(location), getForecast(location)])
    .then((responseArray) =>{
        const curRes = responseArray[0];
        const forRes = responseArray[1];
        const city = new City(forRes.data.city);
        const forecast = new ForecastList(forRes.data.list);
        const current = new Weather (curRes.data);
        const data = (weatherType === 'current')?{city, current}:{city, current, forecast};
        const response = new Response('success', data);
        res.json(response);
    })
    .catch( (error) => {
        console.error('Error ' + error.message);
    });
}

module.exports = {
    getWeather
}