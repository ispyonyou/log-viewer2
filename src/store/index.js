import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import filterMessages from '../middlewares/filterMessages'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(filterMessages, logger)

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store
