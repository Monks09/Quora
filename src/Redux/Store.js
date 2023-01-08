import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import answerReducer from './Answer/answerReducer';

const combinedReducer = combineReducers({
    questions: answerReducer
})

const myStore = legacy_createStore(combinedReducer, applyMiddleware(logger, thunk));

export default myStore;