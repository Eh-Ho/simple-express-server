const date = (req, res, next) => {
    console.log(new Date (Date.now()).toLocaleTimeString())
    next()
}

module.exports = date