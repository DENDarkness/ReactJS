import { createAction, RSAA, getJSON } from 'redux-api-middleware';

export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';


export const sendMessage = (id, text, nick, chatId, pathName) => ({
    type: SEND_MESSAGE,
    payload: {
        id,
        text,
        nick,
        chatId,
        pathName,
    },
});

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: 'http://localhost:3000/messages',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then(data => data)
            },
            ERROR_MESSAGES_LOADING,
        ],
    },
});