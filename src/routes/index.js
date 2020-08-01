const express = require('express');
const weatherRoute = require('./weather');
const {welcome} = require('../controllers/message');

const router = express.Router();

// localhost:3000
router.use('/weather', weatherRoute);
router.get('', welcome);

module.exports = router;