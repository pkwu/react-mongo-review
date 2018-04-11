const Users = require('../../DB/Models/UsersModel');
const bcrypt = require('bcrypt');

const UserController = {
  SignUp: (req, res) => {
    console.log('here is req.body: ', req.body);

    bcrypt.genSalt(10)
      .then( salt => {
        bcrypt.hash(req.body.password, salt)
          .then( hashed => {
            const user = new Users({
              username: req.body.username,
              password: hashed
            })
            user.save()
              .then( data => {
                //
                console.log('signup data: ', data);
                res.status(201).send('Success');
              })
              .catch( err => {
                //
                res.status(400).send('Signup Failed!');
              })
          })
          .catch( err => {
            //
          })
      })
      .catch( err => {
        //
      })
  },

  // Login: (req, res) => {
  //   console.log('here is req.params: ', req.params);
  //   Users.find({ username: req.params.username })
  //     .then( data => {
  //       if (data.length) {
  //         if (data[0].password === req.params.password) {
  //           console.log('login data: ', data[0]);
  //           res.status(202).send(data[0]._id);
  //           // res.send('successful login!');
  //         }
  //         res.status(200).send('Incorrect Password!');
  //       }
  //       res.status(400).send('No User Found!');
  //     })
  //     .catch( err => {
  //       res.status(400).send('Login Failed');
  //     })
  // },

  Login: (req, res) => {
    console.log('here is req.params: ', req.params);
    Users.find({ username: req.params.username })
      .then( data => {
        if (data.length) {
          bcrypt.compare(req.params.password, data[0].password, (err, result) => {
            result ? 
              res.status(202).send(data[0]._id)
              :
              res.status(200).send('Invalid Password');
          });
        } 
        else {
          console.log('this one');
          res.status(200).send('No User Found!');
        }
      })
      .catch( err => {
        console.log('this one!');
        res.status(400).send('Login Failed');
      })
  }
}

module.exports = UserController;