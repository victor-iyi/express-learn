const express = require('express');
const router = express.Router();

/**
 * GET:
 */
router.get('/', (req, res) => {
  res.send('Hello, user');
});

router.get('/:name', (req, res) => {
  res.render('user', { name: req.params.name });
});

/**
 * POST:
 */
router.post('/', (req, res) => {
  res.send(`<h1>Hello ${req.body.firstname}, ${req.body.lastname}</h1>`);
});

module.exports = router;