import React, { Component } from 'react';
import logo from './logo.svg';
import './main.scss';
import Nav from './components/nav/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

export default App;
