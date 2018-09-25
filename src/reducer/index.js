import {combineReducers} from 'redux'
import navUiReducer from './navUi'
import filterReducer from './filter'
import settingsReducer from './settings'
import logMessagesReducer from './logMessages'

export default combineReducers({
  navUi: navUiReducer,
  filter: filterReducer,
  settings: settingsReducer,
  logMessages: logMessagesReducer,
})
