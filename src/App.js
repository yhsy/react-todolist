import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render () {
    return (
      <div className="g_app">
        <h2>React-TodoList</h2>
        <div className="m_logo">
          <img src={logo} />
        </div>
      </div>
    );
  }
}

export default App;
