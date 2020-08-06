const axios = require('../../node_modules/axios');
const appid =`${process.env.appid}`;      // Fill in API key

const openWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    params: {
        appid: appid
    }            
});

function requestWeather (location, weatherType = 'current') {
    const route = (weatherType === 'forecast')? '/forecast':'/weather';
    const response = openWeather.get(route, {
        params: { 
            q: location
        }
    });
    return response;
}

function getWeather (location) {
    return Promise.all([requestWeather(location), requestWeather(location, 'forecast')]);
}


module.exports = {
    getWeather
};


