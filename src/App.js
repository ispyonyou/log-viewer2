"use strict";

import React from 'react'

import FileChooser from './FileChooser'
import PaginatedLogMessagesList from './PaginatedLogMessagesList'
import Filter from './Filter'
import FilterNav from './FilterNav'
import Settings from './Settings'

import './App.css'

class App extends React.Component
{
  state = {
    isFilterOpened: false,
    defaultLogMessages: null,
    logMessages: null,
    settings: {
      formatSql: true,
      highlightSql: true,
    }
  }

  handleShowFilter = () => {
    this.setState({isFilterOpened: true})
  }

  handleCloseFilter = () => {
    this.setState({isFilterOpened: false})
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

  handleSettingsChanged = (newSettings) => {
    this.setState({settings: newSettings})
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
    const {defaultLogMessages, logMessages, settings} = this.state;
    var logLevels = this.getLogLevels(defaultLogMessages);
    var loggers = this.getLoggers(defaultLogMessages);

    return (
      <div>
        <div className="header">
          <div className="navItem">
            <FilterNav onChange={this.handleShowFilter} />
          </div>
          <div className="navItem">Settings</div>
          <div className="fileChooser">
            <FileChooser handleFileRead={this.handleFileRead} />
          </div>
        </div>
        <div>
          {this.renderFilter(logLevels,loggers)}
          <Settings settings={settings}
                    onChange={this.handleSettingsChanged}/>
        </div>
        <PaginatedLogMessagesList logMessages={logMessages} settings={settings} perPage={500} />
      </div>
    )
  }

  renderFilter(logLevels, loggers) {
    const {isFilterOpened} = this.state;
//    if (!isFilterOpened) return;

    return (
      <Filter isOpened={isFilterOpened}
              avLogLevles = {logLevels}
              avLoggers={loggers}
              onClose={this.handleCloseFilter}
              onChange={this.handleFilterChanged} />
    );
  }

//  <Filter avLogLevles = {logLevels}
//  avLoggers={loggers}
//  onChange={this.handleFilterChanged} />

}

export default App