const { getCode, getName } = require('country-list');
const {invalid} = require('../services/error');

function ccValidate(req, res, next) {
    const {cc} = req.query;
    const error = invalid;
    if ((getCode(cc)) || (getName(cc))) {
        next();
    }else{
        console.log('failed');
        res.status(error.code).json(error);
    }
}

module.exports = {
    ccValidate
}