import React from 'react';
import './App.css';
import herzbergTest from './components/internal/herzberg-ribbon/fixtures/herzberg.json';
import { HerzbergRibbon } from './components/internal/herzberg-ribbon/herzberg-ribbon';

function App() {
  return (
    <div className="App">
      <HerzbergRibbon 
        testQuestions={herzbergTest}
      />
    </div>
  );
}

export default App;
