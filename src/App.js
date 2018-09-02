// src/App.js 

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js'
export default class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Main/>
    </div>);

  }

}