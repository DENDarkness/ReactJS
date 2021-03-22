export const REMOVE_MESSAGE = '@@message/REMOVE_MESSAGE';

export const removeMessage = (text) => ({
    type: REMOVE_MESSAGE,
    payload: {
        text,
    },
});