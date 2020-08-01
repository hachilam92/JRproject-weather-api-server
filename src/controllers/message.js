const formats = require('../services/resFormats');

function welcome (req, res, next) {
    const message = 'Welcome to the weather api! Visit /api-docs for help';
    const response = formats.resFormat('success', message);
    res.status(200).json(response);
}

module.exports = {
    welcome
}