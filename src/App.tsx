import React from 'react';
import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header__container">
        <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        </div>
      </header>
      <div className="banner">
      <div className="banner__container">
      <h1 className="banner__logo">Order Food</h1>
        <b>
        From 175 Restaurants
        </b>
      </div>
      </div>
    </div>
  );
}

export default App;
