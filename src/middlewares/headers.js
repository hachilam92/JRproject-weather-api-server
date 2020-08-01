function setHeader(req,res,next) {
    res.setHeader('access-control-allow-origin', '*');
    next();
}

module.exports = {
    setHeader
}