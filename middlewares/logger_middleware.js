const logger = (req, res, next) => {
    console.log(`request url : "${req.url}"`);
    next();
}
module.exports = logger;
