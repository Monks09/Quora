import userReducer from "../Quora/userSlice";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import answerReducer from './Redux/Answer/answerReducer';
import { reducer } from './Component/Home/redux/reducer';
const combinedReducer = combineReducers({
    questions: answerReducer,
    post: reducer,
    user: userReducer,
})

const Store = legacy_createStore(combinedReducer, applyMiddleware(logger, thunk));

export default Store;
