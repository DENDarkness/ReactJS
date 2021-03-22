export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

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