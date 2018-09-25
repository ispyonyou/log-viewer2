import {CHANGE_FLT_INCLUDE_LOG_LEVEVLS, CHANGE_FLT_EXCLUDE_LOG_LEVEVLS,
  CHANGE_FLT_INCLUDE_LOGGERS, CHANGE_FLT_EXCLUDE_LOGGERS} from '../constants'

const defaultState = {
  includeLogLevels: [],
  excludeLogLevels: [],
  includeLoggers: [],
  excludeLoggers: [],
}

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_FLT_INCLUDE_LOG_LEVEVLS: return {
      ...state, includeLogLevels: action.payload.includeLogLevels
    };
    case CHANGE_FLT_EXCLUDE_LOG_LEVEVLS: return {
      ...state, excludeLogLevels: action.payload.excludeLogLevels
    };
    case CHANGE_FLT_INCLUDE_LOGGERS: return {
      ...state, includeLoggers: action.payload.includeLoggers
    };
    case CHANGE_FLT_EXCLUDE_LOGGERS: return {
      ...state, excludeLoggers: action.payload.excludeLoggers
    };
    default: return state;
  }
}
