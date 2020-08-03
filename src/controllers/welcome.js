const {SuccessRes} = require('./response-class');

function welcome (req, res, next) {
    const welcomeMessage = 'Welcome to the weather api! Visit /api-docs for help';
    const welcomeRes = new SuccessRes(welcomeMessage);
    res.json(welcomeRes);
}

module.exports = welcome;