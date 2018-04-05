import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmitHandler() {
    console.log('fired submit!');
    const payload = {
      username: this.state.username,
      password: this.state.password
    };
    console.log('here is the payload', payload);
    axios.post('/api/user/signup', payload)
      .then( response => {
        console.log('Server replied with... ', response);
      })
      .catch( err => {
        console.log('Server errored with... ', err);
      })
  }

  render() {
    return (
      <div>
        <div>Username: </div>
        <input name='username' onChange={this.onChangeHandler.bind(this)}/>
        <div>Password: </div>
        <input name='password' onChange={this.onChangeHandler.bind(this)}/>
        <br/><br/>
        <button onClick={this.onSubmitHandler.bind(this)}>Sign Up</button>
      </div>
    )
  }
}

export default Login;