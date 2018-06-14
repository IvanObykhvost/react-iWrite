import React, { Component } from 'react';
import logo from './logo.svg';

import Nav from './components/nav/index';
//import { newPost } from './actions/nav-action';
import PostNew from './containers/post/PostNew';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Nav />
            <PostNew />
      </div>
    );
  }
}

export default App;
