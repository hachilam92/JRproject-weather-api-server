function toCelsius (Kelvin) {
    let Celsius = Kelvin - 273.15;
    Celsius = twoDigits(Celsius);
    return Celsius;
}

function toFahrenheit (Kelvin) {
    let Fahrenheit = 9 * (Kelvin - 273.15) / 5 + 32;
    Fahrenheit = twoDigits(Fahrenheit);
    return Fahrenheit;
}

function twoDigits (number) {
    let formatted = number.toFixed(2);
    return parseFloat(formatted);
}

function windDirect (windDegree) {
    const directionList = ["N", "NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];
    const directionGap = 22.5;
    const offset = directionGap/2;   //11.25
    const indexMapping = parseInt((windDegree + offset) / 22.5) + 1;
    let direction = directionList[indexMapping];
    return direction; 
}

module.exports = {
    toCelsius,
    toFahrenheit,
    windDirect
};