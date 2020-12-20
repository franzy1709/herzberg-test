import React from 'react';
import ReactDOM from 'react-dom';
import { HerzbergAnswer, HerzbergRibbon, HerzberTestRecord } from '../../../components/internal/herzberg-ribbon/herzberg-ribbon';
import herzbergTest from '../../../components/internal/herzberg-ribbon/fixtures/herzberg.json';

type InitAtProps = {
  el: HTMLElement | string;
  data?: HerzberTestRecord[];
  onTestCompletion?: (answers: HerzbergAnswer[])=>void;
}

export default function initAt(window: Window, props: InitAtProps){
  const {el, data = herzbergTest, onTestCompletion} = props;
  const nodes = typeof el === 'string'
    ? window.document.querySelectorAll(el)
    : el instanceof HTMLElement ? [el] : [];

  [].slice.call(nodes).forEach(el=>{
  ReactDOM.render(
    <React.StrictMode>
      <HerzbergRibbon testQuestions={data} onTestCompletion={onTestCompletion}/>
    </React.StrictMode>,
    el
  );
})
}