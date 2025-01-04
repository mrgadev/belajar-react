import React from 'react';
import logo from './logo.svg';
import {Provider} from "react-redux";
import './App.css';
import store from './store';
import Todos from './components/Todos';
import Form from './components/Form';
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Belajar Redux</h1>
        <Todos/>
        <Form/>
      </div>
    </Provider>
  );
}

export default App;
