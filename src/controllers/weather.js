const messages = require('./message');
const weatherModel = require('../Models/weather');



function getWeather (req, res, next) {
    const {cc, city, weatherType} = req.query;
    const location = `${city}, ${cc}`;
    weatherModel.getWeather(location, weatherType, res);
}


module.exports = {
    getWeather
}