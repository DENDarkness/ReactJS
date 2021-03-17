import { SEND_MESSAGE } from '../actions/messageActions'
import { ADD_CHAT } from '../actions/chatActions'
import { UNREAD_MESSAGES } from '../actions/unreadMessages'
import { READ_MESSAGES } from '../actions/readMessages'

const initialState = {
    /*     chats: [{
            id: 1,
            title: "Семья",
            messagesList: []
        }, {
            id: 2,
            title: "Друзья",
            messagesList: []
        }, {
            id: 3,
            title: "Игры",
            messagesList: []
        }], */
    messages: {
        0: [],
        1: [],
        2: [],
    },
    chats: [{
        chatId: 0,
        chatName: 'Друзья',
        status: false
    }, {
        chatId: 1,
        chatName: 'Семья',
        status: false
    }, {
        chatId: 2,
        chatName: 'Игровой',
        status: false
    }],
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const prevMessages = state.messages[action.payload.chatId] || [];
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...prevMessages,
                        {
                            id: action.payload.id,
                            nick: action.payload.nick,
                            text: action.payload.text,
                        }

                    ]
                }
            };
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats,
                        {
                            pathName: action.payload.pathName,
                            chatName: action.payload.chatName,
                            status: false
                        }
                    ]
                    //                chats: [...state.chats, action.payload.chatName]
            };
        case UNREAD_MESSAGES:
            return {
                ...state,
                chats: state.chats.map(chat => {
                    if (action.payload.chatId == chat.chatId) {
                        return {
                            ...chat,
                            status: true,
                        }
                    }
                    return chat;
                })

            };
        case READ_MESSAGES:
            return {
                ...state,
                chats: state.chats.map(chat => {
                    if (action.payload.chatName == chat.chatName) {
                        return {
                            ...chat,
                            status: false,
                        }
                    }
                    return chat;
                })

            };
        default:
            return state;
    }
};