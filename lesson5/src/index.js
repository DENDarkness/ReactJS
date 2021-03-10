import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';

//import { Messages } from './components/Messages';
//import { ButtonAction } from './components/ButtonAction';
import { App } from './components/App';
import { store } from './redux/store';

//ReactDOM.render( < ButtonAction / > , document.querySelector('#root'));
/* ReactDOM.render( <
    BrowserRouter >
    <ReduxProvider store = { store } >
    <App / >
    </ReduxProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);
 */
ReactDOM.render( 
    <BrowserRouter >
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);