import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

//import { Messages } from './components/Messages';
//import { ButtonAction } from './components/ButtonAction';
import { App } from './components/App';

//ReactDOM.render( < ButtonAction / > , document.querySelector('#root'));
ReactDOM.render( < BrowserRouter > < App / > < /BrowserRouter>, document.querySelector('#root'));