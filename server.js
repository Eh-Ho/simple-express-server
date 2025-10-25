const express = require('express');
const logger = require('./middlewares/logger_middleware')
const date = require('./middlewares/date_middleware')
const publicRouter = require('./routes/public_routes');
const path = require('path');
const pageNotFound = require('./routes/err_routes');
const app = express();

app.use(date);
app.use(logger);
app.use(publicRouter,express.static(path.join(process.cwd(), 'web')));
app.use(pageNotFound)


app.listen(3000,()=>{
    console.log('server running on port localhost:3000');
})