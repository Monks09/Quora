import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { legacy_createStore, applyMiddleware } from "redux";
import reducer from './reducer';

const Store = legacy_createStore(reducer, applyMiddleware(logger, thunk));

export default Store;
