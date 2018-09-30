import {FILTER_LOG_MESSAGES, START, FINISH} from '../constants'

function filterLogMessagesFn(filter, defaultLogMessages)
{
  var newLogMessages = defaultLogMessages

  if (filter.logLevels.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return filter.logLevels.some(level => level === logMessage.lvl)
    } );
  }

  if (filter.loggers.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return filter.loggers.some(logger => logger === logMessage.lgr)
    } );
  }

  return newLogMessages;
}

export default store => {
  return (next) => {
    return (action) => {
      const {type, filterLogMessages} = action  
      if (!filterLogMessages) return next(action)

      const state = store.getState()

      next({...action, type: FILTER_LOG_MESSAGES + START})

      const newLogMessages = filterLogMessagesFn(state.filter, state.logMessages.defaultLogMessages);

      next({...action, 
        type: FILTER_LOG_MESSAGES + FINISH,
        filteredLogMessages: newLogMessages
      })
    }
  }
}
