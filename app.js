const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const index = require('./routes/index');
const user = require('./routes/user');
const api = require('./routes/api');

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// middlewares
app.use('/', (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});
app.use('/assets', express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/', index);
app.use('/user', user);
app.use('/api', api);

app.listen(PORT);
console.log(`Server listening on http://localhost:${PORT}`);

module.exports = app;