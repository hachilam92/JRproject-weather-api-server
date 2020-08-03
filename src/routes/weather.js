const express = require('express');
const {getWeather} = require('../controllers/weather');
const {ccValidate} = require('../middlewares/validate');

const router = express.Router();

// GET localhost:3000/weather
router.get('', ccValidate, getWeather);

module.exports = router;