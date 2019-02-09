
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import bank from './reducers/bankreducer.js'
import dateRDC from './reducers/datereducer.js'
const store = createStore(combineReducers({bank, dateRDC}), applyMiddleware(thunk) );

export default store;