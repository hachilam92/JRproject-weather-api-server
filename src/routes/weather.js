const express = require('express');
const {getWeather} = require('../controllers/weather');

const router = express.Router();

// GET localhost:3000/weather
router.get('', getWeather);

module.exports = router;