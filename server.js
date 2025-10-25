const express = require('express');
const logger = require('./middlewares/logger_middleware')
const date = require('./middlewares/date_middleware')
const publicRouter = require('./routes/public_routes');
const path = require('path');
const pageNotFound = require('./routes/err_routes');

const app = express();

app.use(date);
app.use(logger);
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
app.use(publicRouter,express.static(path.join(process.cwd(), 'web'), options));
app.use(pageNotFound)


app.listen(3000,()=>{
    console.log('server running on port localhost:3000');
})