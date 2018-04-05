const Users = require('../../DB');

const UserController = {
  SignUp: (req, res) => {
    console.log('here is req.body: ', req.body);
    const user = new Users({
      username: req.body.username,
      password: req.body.password
    })
    user.save()
      .then( data => {
        //
        res.send('Success');
      })
      .catch( err => {
        //
        res.send('Failed!');
      })
  },

  Login: (req, res) => {
    console.log('here is req.body: ', req.body);
  }
}

module.exports = UserController;