import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HerzbergWidget} from './HerzbergWidget';
import reportWebVitals from '../../reportWebVitals';
import {Helmet} from 'react-helmet';

const sParams = new URLSearchParams(window.location.search);
const customStyles = sParams.get('custom-styles');

let content = <HerzbergWidget />

if(customStyles){
  console.log('Passed custom styles: ', customStyles);
  content = <>
    <Helmet>
      <link rel="stylesheet" href={customStyles} />
    </Helmet>
    {content}
  </>
}

ReactDOM.render(
  <React.StrictMode>
    {content}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
