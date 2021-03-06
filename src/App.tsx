import React from 'react'
import { Outlet } from 'react-router-dom'

import logo from './assets/logo.svg'
import './App.scss'

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
      <Outlet />
    </div>
  )
}

export default App
