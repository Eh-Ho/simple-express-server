const date = (req, res, next) => {
    console.log(new Date (Date.now()).toUTCString())
    next()
}

module.exports = date