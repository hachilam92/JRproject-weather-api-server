const axios = require('axios');
const {City, Weather, ForecastList} = require('./weather-class');
const {SuccessRes} = require('../controllers/response-class');
const error = require('../controllers/error'); 

const openWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});

const appid =`${process.env.appid}`;      // Fill in API key

function requestWeather (location, weatherType = 'current') {
    const route = (weatherType === 'forecast')? '/forecast':'/weather';
    const response = openWeather.get(route, {
        params: { 
            q: location,
            appid: appid
        }
    });
    return response;
}

function getWeather (location, weatherType, res) {
    Promise.all([requestWeather(location), requestWeather(location, 'forecast')])
    .then((responseArray) =>{
        const curRes = responseArray[0];
        const forRes = responseArray[1];
        const city = new City(forRes.data.city);
        const forecast = new ForecastList(forRes.data.list);
        const current = new Weather (curRes.data);
        const data = (weatherType === 'current')?{city, current}:{city, current, forecast};
        const response = new SuccessRes(data);
        return res.json(response);
    })
    .catch(err => {
        error.handler(err, res);
    });
}


module.exports = {
    getWeather
};


