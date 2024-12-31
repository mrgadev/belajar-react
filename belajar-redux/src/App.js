import React from 'react';
import {Provider} from "react-redux"
import logo from './logo.svg';
import './App.css';
import store from './store';
function App() {
  return (
    <Provider>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Belajar Redux</h1>
      </div>
    </Provider>
  );
}

export default App;
