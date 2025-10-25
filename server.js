const express = require('express');
const logger = require('./middlewares/logger_middleware')
const date = require('./middlewares/date_middleware')
const router = require('./routes/public_routes');

const app = express();

app.use(date)
app.use(logger)
app.use(router)


app.listen(3000,()=>{
    console.log('server running on port localhost:3000');
})