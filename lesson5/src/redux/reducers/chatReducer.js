import { SEND_MESSAGE } from '../actions/messageActions'

const initialState = {
    messages: {
        0: [],
        1: [],
        2: [],
    },
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
        default:
            return state;
    }
};