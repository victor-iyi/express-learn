const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

// app.use('/', (req, res, next) => {
//   console.log(`Request url: ${req.url}`);
//   next();
// });
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', { id: req.params.id });
})

app.get('/api', (req, res) => {
  const data = { name: 'Victor I. Afolabi', job: 'developer' };
  res.json(data);
});

app.listen(PORT);