import logger from 'redux-logger';

import { messagesMiddleware } from './messagesMiddlewarw';
import { newMessage } from './newMessagesMiddleware';

export default [
    messagesMiddleware,
    newMessage,
];