import {combineReducers} from 'redux'
import navUiReducer from './navUi'
import filterReducer from './filter'
import logMessagesReducer from './logMessages'

export default combineReducers({
  navUi: navUiReducer,
  filter: filterReducer,
  logMessages: logMessagesReducer,
})
