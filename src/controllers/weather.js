const weatherModel = require('../models/weather');
const {City, Weather, ForecastWeather} = require('../models/weather-class');
const {SuccessRes} = require('../services/response-class');
const error = require('../services/error'); 

function getWeather (req, res, next) {
    const {cc, city, weatherType} = req.query;
    const location = `${city}, ${cc}`;
    weatherModel.getWeather(location).then((responseArray) =>{
        const curRes = responseArray[0];
        const forRes = responseArray[1];
        const city = new City(forRes.data.city);
        const forecast = forRes.data.list.map(item => new ForecastWeather(item));
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



