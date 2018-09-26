function filterLogMessages(filter, defaultLogMessages)
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

self.addEventListener('message', (event) => {
  const filteredMessages = filterLogMessages(event.data.filter, event.data.defaultLogMessages)
  self.postMessage(filteredMessages)
})