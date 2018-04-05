const express = require('express');
const router = express.Router();

router.post('/user/signup', (req, res) => {
  console.log('req.body is: ', req.body);
  res.sendStatus(201);
});

module.exports = router;