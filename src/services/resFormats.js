const units = require('../services/units');

function currentFormat (data) {
    let current = {
        minCelsius: units.toCelsius(data.main.temp_min),
        maxCelsius: units.toCelsius(data.main.temp_max),
        minFahrenheit: units.toFahrenheit(data.main.temp_min),
        maxFahrenheit: units.toFahrenheit(data.main.temp_max),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDirection: units.windDirect(data.wind.deg)
    };
    return current;
}

function forecastFormat (data) {
    let dataList = data.list;
    let city = cityFormat(data);
    let forecast = [];
    dataList.forEach((item) => {
        let forecastItem = {
            minCelsius: units.toCelsius(item.main.temp_min),
            maxCelsius: units.toCelsius(item.main.temp_max),
            minFahrenheit: units.toFahrenheit(item.main.temp_min),
            maxFahrenheit: units.toFahrenheit(item.main.temp_max),
            humidity: item.main.humidity,
            windSpeed: item.wind.speed,
            windDirection: units.windDirect(item.wind.deg),
            time: item.dt
        };
        forecast.push(forecastItem);
    });
    return {city, forecast};
}

function cityFormat (forecastData) {
    let cityData = forecastData.city;
    let city = {
        name: cityData.name,
        coord: cityData.coord,
        country: cityData.country,
        population: cityData.population
    }
    return city;
}

function resFormat (status, data, message=null) {
    return {
        status: status,
        message: message,
        data: data
    }
}

module.exports = {
    currentFormat,
    forecastFormat,
    resFormat
};