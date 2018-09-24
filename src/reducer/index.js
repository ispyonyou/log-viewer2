import {combineReducers} from 'redux'
import navUiReducer from './navUi'

export default combineReducers({
  navUi: navUiReducer,
})
