import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

import { messagesMiddleware } from './messagesMiddlewarw';
import { newMessage } from './newMessagesMiddleware';

export default [
    messagesMiddleware,
    apiMiddleware,
    newMessage,

];