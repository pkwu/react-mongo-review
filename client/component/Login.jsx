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

  onSignUpHandler() {
    console.log('fired signup');
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

  onLoginHandler() {
    console.log('fired login');
    axios.get(`/api/user/login/${this.state.username}/${this.state.password}`)
      .then( response => {
        console.log('Server replied with... ', response);
        response.status === 202 ? this.props.toggleLoggedIn() : console.log('Did not successfully log in!');
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
        <button onClick={this.onSignUpHandler.bind(this)}>Sign Up</button>
        <button onClick={this.onLoginHandler.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login;