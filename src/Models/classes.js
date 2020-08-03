const units = require('../services/units');

class City {
    constructor (cityData) {
        this.name = cityData.name;
        this.coord = cityData.coord;
        this.country = cityData.country;
        this.population = cityData.population;
    }
}

class Weather {
    constructor(data) {
        this.minCelsius =  units.toCelsius(data.main.temp_min);
        this.maxCelsius = units.toCelsius(data.main.temp_max);
        this.minFahrenheit = units.toFahrenheit(data.main.temp_min);
        this.maxFahrenheit = units.toFahrenheit(data.main.temp_max);
        this.humidity = data.main.humidity;
        this.windSpeed = data.wind.speed;
        this.windDirection = units.windDirect(data.wind.deg);
    }
}

class ForecastWeather extends Weather {
    constructor (data) {
        super(data);
        this.time = data.dt;
    }
}

class ForecastList {
    constructor (dataList) {
        this.list = [];
        dataList.forEach((item) => {
            let forecastItem = new ForecastWeather(item);
            this.list.push(forecastItem);
        });
    }
}

class Response {
    constructor (status, data, message = null) {
        this.status = status;
        this.data = data;
        this.message = message;
    }
}

module.exports = {
    City,
    Weather,
    ForecastList,
    Response
}