export const READ_MESSAGES = '@@message/READ_MESSAGES';

export const readMessages = (chatName) => ({
    type: READ_MESSAGES,
    payload: {
        chatName,
    },
});