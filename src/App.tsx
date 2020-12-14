import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Herzberg } from './components/internal/herzberg/herzberg';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Herzberg 
        testQuestions={[
          ['Для тебя важна хорошо оплачиваемая работа, даже если ты не получаешь должного признания.',
          'Для тебя важно признание и похвала, даже если оплата не так высока.']
        ]}
      />
    </div>
  );
}

export default App;
