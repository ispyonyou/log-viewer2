"use strict";

import React from 'react'

import FileChooser from './FileChooser'
import PaginatedLogMessagesList from './PaginatedLogMessagesList'
import NavItem from './NavItem'
import Filter from './Filter'
import Settings from './Settings'

import './App.css'

class App extends React.Component
{
  state = {
    isFilterOpened: false,
    isSettingsOpened: false,
    defaultLogMessages: null,
    logMessages: null,
    settings: {
      formatSql: true,
      highlightSql: true,
    }
  }

  handleShowFilter = () => { this.setState({isFilterOpened: !this.state.isFilterOpened}) }

  handleCloseFilter = () => { this.setState({isFilterOpened: false}) }

  handleShowSettings = () => { this.setState({isSettingsOpened: !this.state.isSettingsOpened}) }

  handleCloseSettings = () => { this.setState({isSettingsOpened: false}) }

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

    var idCounter = 0;
    var newDefaultLogMessages = JSON.parse(jsonStr);
    var newDefaultLogMessages = newDefaultLogMessages.map(msg => {return {...msg, ...{ "id": idCounter++}}} );

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

    var loggersSet = new Set();
    logMessages.forEach( (msg) => {
      loggersSet.add(msg.lgr);
    });

    return [...loggersSet];
  }

  render() {
    const {defaultLogMessages, logMessages, settings} = this.state;
    var logLevels = this.getLogLevels(defaultLogMessages);
    var loggers = this.getLoggers(defaultLogMessages);

    return (
      <div className="app">
        <div className="headerInlineBlock">

        <div className="header">
          <div className="navItem">
            <NavItem label="Filter" onClick={this.handleShowFilter} />
          </div>
          <div className="navItem">
            <NavItem label="Settings" onClick={this.handleShowSettings} />
          </div>
          <div className="fileChooser">
            <FileChooser handleFileRead={this.handleFileRead} />
          </div>
        </div>
        </div>
        <div>
          {this.renderFilter(logLevels,loggers)}
          {this.renderSettings()}
        </div>
        <div className="messagesList">
          <PaginatedLogMessagesList logMessages={logMessages} settings={settings} perPage={500} />
        </div>
      </div>
    )
  }

  renderFilter(logLevels, loggers) {
    const {isFilterOpened} = this.state;

    return (
      <Filter isOpened={isFilterOpened}
              avLogLevels = {logLevels}
              avLoggers={loggers}
              onClose={this.handleCloseFilter}
              onChange={this.handleFilterChanged} />
    );    
  }

  renderSettings() {
    const {isSettingsOpened, settings} = this.state;

    return (
      <Settings isOpened={isSettingsOpened}
                settings={settings}
                onClose={this.handleCloseSettings}
                onChange={this.handleSettingsChanged}/>
    );
  }

}

export default App