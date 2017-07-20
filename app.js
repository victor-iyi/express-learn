
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));
app.use('/', (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', { id: req.params.id });
});

/**
 * BODY PARSER MIDDLEWARE...
 * // Middleware that makes available the body obj on request
 * const bodyParser = require('body-parser');
 * const urlencodedParser = bodyParserurlencoded({ extended: false });
 * app.post('/person', urlencodedParser, (req, res) => {
 *   res.send(`Thank you, ${req.body.firtname}, ${req.body.lastname}`);
 * });
 *
 * const jsonParser = bodyParser.json();
 * app.post('/personjson', jsonParser, (req, res) => {
 *   res.send(`Thank you for the JSON object! ${req.body.firsntname}, ${req.body.lastname}`);
 *   console.log(`PersonJSON: ${req.body.firstname}, ${req.body.lastname}`);
 * });
 */

/**
 * RESTful API: We decide that the HTTP verbs & url mean something.
 */
app.get('/api', (req, res) => {
  const data = { name: 'Victor I. Afolabi', job: 'developer' };
  res.json(data);
});


app.listen(PORT);