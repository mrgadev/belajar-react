import React from 'react';
import logo from './logo.svg';
import './App.css' ;
import './App.scss';
const App = () => {
  return (
    <div className="App">
      <h1>Learning SASS</h1>
      <div className="card">
        <div className='card__image'>
          image
        </div>
        <div className='card__heading'>
          heading
        </div>
        <div className='card__text--normal'>
          text normal
        </div>
        <div className='card__text--italic'>
          text italic
        </div>
      </div>
      <button className='btn btn--primary'>Primary</button>
      <button className='btn btn--secondary'>Secondary</button>
    </div>
  );
}

export default App;
