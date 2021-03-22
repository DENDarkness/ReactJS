import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    /*     chat: {
            messages: {
                0: [{ id: 0, nick: 'bot', text: 'Hello!' }]
            }
        } */
};

const store = createStore(reducers, initialState);

export { store };