const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ firstname: 'Victor I.', lastname: 'Afolabi'});
});

router.post('/user', (req, res) => {
  // res.json({ firstname: req.body.firstname, lastname: req.body.lastname });
  console.log(`/api/user says hello ${req.body.firstname}, ${req.body.lastname}!`);
});

module.exports = router;