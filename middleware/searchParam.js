
const searchParamType = (req, res, next) => {
    console.log(req.params);
    next();
}

module.exports = searchParamType;