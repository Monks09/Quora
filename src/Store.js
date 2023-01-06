import {applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { reducerName } from './Redux/Following/reduser'
import logger from 'redux-logger'
let reducer=combineReducers({
    follower:reducerName
})
const store = createStore(reducer,applyMiddleware(logger))

export default store