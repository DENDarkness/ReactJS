import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import { App } from './components/App';
import { store, history, persistor } from './redux/store';

ReactDOM.render( 
    <ReduxProvider store = { store } >
        <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
        <App / >
        </PersistGate>
        </ConnectedRouter>
    </ReduxProvider>,
    document.querySelector('#root')
);