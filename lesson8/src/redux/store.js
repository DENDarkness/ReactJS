import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers';
import middlewares from './middlewares';
import { red } from '@material-ui/core/colors';

const initialState = {};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['chat', 'profile']
}

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, reducers(history))



const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middlewares)),
);

export const persistor = persistStore(store)

export { store };