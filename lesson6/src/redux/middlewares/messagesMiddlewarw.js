import { SEND_MESSAGE, sendMessage } from '../actions/messageActions'

export const messagesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            {
                if (action.payload.nick == 'den') {
                    setTimeout(() => {
                        store.dispatch(
                            sendMessage(
                                '0',
                                'I am bot',
                                'bot',
                                action.payload.chatId,
                                action.payload.pathName,
                            )
                        );
                    }, 3000);
                }
            }
    }
    return next(action);
}