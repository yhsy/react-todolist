import React, { Component } from 'react';
import logo from './logo.svg';
// 小姐姐组件
import XiaoJieJie from './xjj'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="g_app">
        {/* 
          <h2>React-TodoList</h2>
          <div className="m_logo">
            <img src={logo} />
          </div> 
        */}
        <XiaoJieJie></XiaoJieJie>
      </div>
    );
  }
}

export default App;
