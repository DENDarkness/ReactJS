import { SEND_MESSAGE } from '../actions/messageActions'
import { ADD_CHAT } from '../actions/chatActions'

const initialState = {
    messages: {
        0: [],
        1: [],
        2: [],
    },
    chats: ['chat 1', 'chat 2', 'chat 3'],
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
            console.log(state)
            return {
                ...state,
                chats: [...state.chats, action.payload.chatName]
            };
        default:
            return state;
    }
};