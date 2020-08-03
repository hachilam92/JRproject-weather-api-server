const {ErrorRes} = require('./response-class');

function handler (error, res) {
    const errorInfo = error.response.data;
    const errorCode = errorInfo.cod;
    const errorMessage = errorInfo.message;
    const response = new ErrorRes(errorCode, errorMessage);
    console.log(`Error ${error.message}`);
    res.status(errorCode).json(response);
}

const invalid = new ErrorRes('400', 'Invalid country name or country code');

module.exports = {
    handler,
    invalid
};