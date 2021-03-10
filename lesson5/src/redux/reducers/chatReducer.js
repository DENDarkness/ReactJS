import { SEND_MESSAGE } from '../actions/messageActions'

const initialState = {
    /*     messages: {
            0: [{ text: 'Hello from redux', nick: 'robot' }],
        }, */
};

export const chatReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const prevMessages = state.messages[action.payload.chatId] || []; {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        [action.payload.chatId]: [
                            ...prevMessages,
                            {
                                id: action.payload.id,
                                text: action.payload.text,
                                nick: action.payload.nick,
                            },
                        ],
                    },
                };
            }
        default:
            return state;
    }
};