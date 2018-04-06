import React, { Component } from 'react';
import Login from '../component/Login';
import Home from '../component/Home';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  isLoggedInHandler() {
    this.setState({ isLoggedIn: true });
  }

  isLoggedOutHandler() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
      {this.state.isLoggedIn ? 
        <div>
          <Home />
        </div>
        :
        <div>
          <Login toggleLoggedIn={this.isLoggedInHandler.bind(this)}/>
        </div>
      }
      </div>
    );
  }
}

export default App;