const {Response} = require('../Models/classes');

function welcome (req, res, next) {
    const message = 'Welcome to the weather api! Visit /api-docs for help';
    // const response = formats.resFormat('success', message);
    const response = new Response('success', message);
    res.status(200).json(response);
}

// function notFound (res, errorCode, message) {
//     const response = formats.resFormat('Data Not Found', message);
//     res.status(errorCode).json(response);
// }

module.exports = {
    welcome,
    // notFound
}