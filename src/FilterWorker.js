function filterLogMessages(filter, defaultLogMessages)
{
  var newLogMessages = defaultLogMessages

  if (filter.includeLogLevels.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return filter.includeLogLevels.some(level => level === logMessage.lvl)
    } );
  }

  if (filter.excludeLogLevels.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return !filter.excludeLogLevels.some(level => level === logMessage.lvl)
    } );
  }

  if (filter.includeLoggers.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return filter.includeLoggers.some(logger => logger === logMessage.lgr)
    } );
  }

  if (filter.excludeLoggers.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return !filter.excludeLoggers.some(logger => logger === logMessage.lgr)
    } );
  }

  return newLogMessages;
}


self.addEventListener('message', (event) => {
  const filteredMessages = filterLogMessages(event.data.filter, event.data.defaultLogMessages)
  self.postMessage(filteredMessages)
})