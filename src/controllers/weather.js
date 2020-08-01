const formats = require('../services/resFormats');
const axios = require('axios');
const openWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});

const appid =`${process.env.appid}`;      // Fill in API key

function getCurrent(location) {
    return openWeather.get('/weather', {
        params: { 
            q: location,
            appid: appid
        }
    })
}

function getForecast(location) {
    return openWeather.get('/forecast', {
        params: { 
            q: location,
            appid: appid
        }
    })
}

function getWeather (req, res, next) {
    const {cc, city, weatherType} = req.query;
    const location = `${city}, ${cc}`;

    axios.all([getCurrent(location), getForecast(location)])
        .then(axios.spread((curRes, forRes) =>{
            const {city, forecast} = formats.forecastFormat(forRes.data);
            const current = formats.currentFormat(curRes.data);
            const data = (weatherType === 'current')?{city, current}:{city, current, forecast};
            const response = formats.resFormat('success', data) 
            res.status(200).json(response);
        }))
        .catch( (error) => {
            console.error('Error ' + error.message);
        });
}


module.exports = {
    getWeather
}