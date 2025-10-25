const express = require('express');
const logger = require('./middlewares/logger_middleware')
const date = require('./middlewares/date_middleware')
const publicRouter = require('./routes/public_routes');
const path = require('path')
const app = express();

app.use(date)
app.use(logger)
app.use(publicRouter,express.static(path.join(process.cwd(), 'web')))


app.listen(3000,()=>{
    console.log('server running on port localhost:3000');
})