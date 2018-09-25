import {CHANGE_DEFAULT_LOG_MESSAGES} from '../constants'

const defaultState = {
  defaultLogMessages: [],
}

export default (state = defaultState, action) => {
  const {type} = action;
  switch (type) {
    case CHANGE_DEFAULT_LOG_MESSAGES: return {
      defaultLogMessages: action.payload.defaultLogMessages
    }
    default: return state;
  }
}