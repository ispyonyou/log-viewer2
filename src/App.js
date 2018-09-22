"use strict";

import React from 'react'

import FileChooser from './FileChooser'
import PaginatedLogMessagesList from './PaginatedLogMessagesList'
import Filter from './Filter'

class App extends React.Component
{
  state = {
    defaultLogMessages: null,
    logMessages: null
  }  

  handleFilterChanged = (filter) => {
    var newLogMessages = this.state.defaultLogMessages || []

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

    this.setState({logMessages: newLogMessages})
  }

  handleFileRead = (e) => {
    var jsonStr = "[" + e.target.result
    jsonStr = jsonStr.substr(0, jsonStr.length-1) + "]"

    var newDefaultLogMessages = JSON.parse(jsonStr)

    this.setState( {
      defaultLogMessages: newDefaultLogMessages,
      logMessages: newDefaultLogMessages
    } )
  }

  getLogLevels(logMessages) {
    if(!logMessages) return [];

    var logLevelsSet = new Set();
    logMessages.forEach( (msg) => {
      logLevelsSet.add(msg.lvl);
    });

    return [...logLevelsSet];
  }

  getLoggers(logMessages) {
    if(!logMessages) return [];

    var logegrssSet = new Set();
    logMessages.forEach( (msg) => {
      logegrssSet.add(msg.lgr);
    });

    return [...logegrssSet];
  }

  render() {
    const {defaultLogMessages, logMessages} = this.state;
    var logLevels = this.getLogLevels(defaultLogMessages);
    var loggers = this.getLoggers(defaultLogMessages);

    return (
      <div>
        <FileChooser handleFileRead={this.handleFileRead} />        
        <Filter avLogLevles = {logLevels}
                avLoggers={loggers}
                onChange={this.handleFilterChanged} />
        <PaginatedLogMessagesList logMessages={logMessages} perPage={500} />
      </div>
    )
  }
}

export default App