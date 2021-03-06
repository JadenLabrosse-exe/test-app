import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import LoginButton from './component/login-button';
import reportWebVitals from './reportWebVitals';
import LoginFeed from './component/login-feed';

ReactDOM.render(
  React.createElement(LoginFeed, {}, null),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
