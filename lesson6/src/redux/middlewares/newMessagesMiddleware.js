import { SEND_MESSAGE } from '../actions/messageActions';
import PropTypes from 'prop-types';


export const newMessage = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.payload.pathName !== window.location.pathname) {
                console.log('Мигание')


            }
    }
    return next(action);
}