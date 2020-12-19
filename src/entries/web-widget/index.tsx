import React from 'react';
import ReactDOM from 'react-dom';
import { HerzbergRibbon } from '../../components/internal/herzberg-ribbon/herzberg-ribbon';
import herzbergTest from '../../components/internal/herzberg-ribbon/fixtures/herzberg.json';

const renderTo = `[data-herzberg-widget='root']`;

const rootElements = document.querySelectorAll(renderTo);
[].slice.call(rootElements).forEach(el=>{
  ReactDOM.render(
    <React.StrictMode>
      <HerzbergRibbon testQuestions={herzbergTest} />
    </React.StrictMode>,
    el
  );
})

