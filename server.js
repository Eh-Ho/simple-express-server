const express = require('express');
const logger = require('./middlewares/logger_middleware')
const app = express();

app.use(logger)


app.listen(3000,()=>{
    console.log('server running on port localhost:3000');
})