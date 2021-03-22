export const UNREAD_MESSAGES = '@@message/UNREAD_MESSAGES';

export const unreadMessages = (chatId) => ({
    type: UNREAD_MESSAGES,
    payload: {
        chatId,
    },
});