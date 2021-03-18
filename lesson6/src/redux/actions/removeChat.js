export const REMOVE_CHAT = '@@chat/REMOVE_CHAT';

export const removeChat = (chatName) => ({
    type: REMOVE_CHAT,
    payload: {
        chatName,
    },
});