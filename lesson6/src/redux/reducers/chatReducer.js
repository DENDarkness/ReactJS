import { SEND_MESSAGE } from '../actions/messageActions'
import { ADD_CHAT } from '../actions/chatActions'
import { STATUS_CHAT } from '../actions/chatActions'

const initialState = {
    messages: {
        0: [],
        1: [],
        2: [],
    },
    chats: [{
        chatName: 'Друзья',
        status: false
    }, {
        chatName: 'Семья',
        status: false
    }, {
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
                            chatName: action.payload.chatName,
                            status: false
                        }
                    ]
                    //                chats: [...state.chats, action.payload.chatName]
            };
        default:
            return state;
    }
};