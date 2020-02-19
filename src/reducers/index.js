import { combineReducers } from 'redux';
import login from './login';
import messagesReducer from './messagesReducer';

export default combineReducers({ login, messagesReducer });
