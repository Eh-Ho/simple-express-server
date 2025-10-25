const logger = (req, res, next) => {
    console.log(`request : ${req.method}  ->   "${req.url}"`);
    next();
}
module.exports = logger;
