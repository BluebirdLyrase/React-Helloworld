import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import HelloWorld from './HelloWorld';
import ClassExample from './ES/ClassExample';
import ArrowFunction from './ES/ArrowFunction';
import ArrayMethod from './ES/ArrayMethod';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <ClassExample />
    <h2>Arrow Function</h2>
    <ArrowFunction />
    <h2>Array Method</h2>
    <ArrayMethod />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
