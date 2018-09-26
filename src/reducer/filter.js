import {CHANGE_FLT_INCLUDE_LOG_LEVEVLS, CHANGE_FLT_EXCLUDE_LOG_LEVEVLS,
  CHANGE_FLT_INCLUDE_LOGGERS, CHANGE_FLT_EXCLUDE_LOGGERS, CHANGE_FLT_LOG_LEVELS, 
  CHANGE_FLT_LOGGERS 
} from '../constants'

const defaultState = {
  logLevels: [],
  loggers: [],
}

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_FLT_LOG_LEVELS: return {
      ...state, logLevels: payload.logLevels
    }
    case CHANGE_FLT_LOGGERS: return {
      ...state, loggers: payload.loggers
    }
    
    default: return state;
  }
}
