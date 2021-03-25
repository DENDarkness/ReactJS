import { createAction, RSAA, getJSON } from 'redux-api-middleware';
export const ADD_CHAT = '@@chat/ADD_CHAT';
export const START_CHATS_LOADING = '@@chat/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING';

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatName,
    },
});

export const loadChats = () => ({
    [RSAA]: {
        endpoint: 'http://localhost:3000/chats',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(data => data)
            },
            ERROR_CHATS_LOADING,
        ],
    },
});