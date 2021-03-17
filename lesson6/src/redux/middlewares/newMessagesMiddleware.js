import { SEND_MESSAGE } from '../actions/messageActions';
import { UNREAD_MESSAGES, unreadMessages } from '../actions/unreadMessages';



export const newMessage = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.payload.pathName !== window.location.pathname) {
                store.dispatch(
                    unreadMessages(
                        action.payload.chatId,
                    )
                )


            }
    }
    return next(action);
}