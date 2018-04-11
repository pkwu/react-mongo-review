const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

// router.post('/user/signup', (req, res) => {
//   console.log('req.body is: ', req.body);
//   res.sendStatus(201);
// });

router.route('/user/signup')
  .post(UserController.SignUp)
router.route('/user/login/:username/:password')
  .get(UserController.Login)

module.exports = router;