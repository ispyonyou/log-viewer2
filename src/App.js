"use strict";

import React from 'react'

import FileChooser from './FileChooser'
import PaginatedLogMessagesList from './PaginatedLogMessagesList'
import NavItem from './NavItem'
import Filter from './Filter'
import Settings from './Settings'
import {connect} from 'react-redux'
import {toggleFilterIsOpened, toggleSettingsIsOpened, changeDefaultLogMessages} from './AC'

import './App.css'

class App extends React.Component
{
  state = {
    settings: {
      formatSql: true,
      highlightSql: true,
    }
  }

  handleShowFilter = () => { this.props.toggleFilterIsOpened() }

  handleShowSettings = () => { this.props.toggleSettingsIsOpened() }

  handleCloseSettings = () => { this.setState({isSettingsOpened: false}) }

  handleSettingsChanged = (newSettings) => {
    this.setState({settings: newSettings})
  }

  handleFileRead = (e) => {
    var jsonStr = "[" + e.target.result
    jsonStr = jsonStr.substr(0, jsonStr.length-1) + "]"

    var idCounter = 0;
    var newDefaultLogMessages = JSON.parse(jsonStr);
    var newDefaultLogMessages = newDefaultLogMessages.map(msg => {return {...msg, ...{ "id": idCounter++}}} );

    this.props.changeDefaultLogMessages(newDefaultLogMessages)
  }

  getLogLevels() {
    const { defaultLogMessages } = this.props
    if (!defaultLogMessages) return [];

    var logLevelsSet = new Set();
    defaultLogMessages.forEach( (msg) => {
      logLevelsSet.add(msg.lvl);
    });

    return [...logLevelsSet];
  }

  getLoggers() {
    const { defaultLogMessages } = this.props
    if (!defaultLogMessages) return [];

    var loggersSet = new Set();
    defaultLogMessages.forEach( (msg) => {
      loggersSet.add(msg.lgr);
    });

    return [...loggersSet];
  }

  render() {
    const {settings} = this.state;
    const {logMessages} = this.props;
    var logLevels = this.getLogLevels();
    var loggers = this.getLoggers();

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
    return (
      <Filter avLogLevels = {logLevels}
              avLoggers={loggers} />
    );    
  }

  renderSettings() {
    const { settings} = this.state;

    return (
      <Settings settings={settings}
                onChange={this.handleSettingsChanged}/>
    );
  }

}

export default connect((state) =>{
  var newLogMessages = state.logMessages.defaultLogMessages

  if (state.filter.includeLogLevels.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return state.filter.includeLogLevels.some(level => level === logMessage.lvl)
    } );
  }

  if (state.filter.excludeLogLevels.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return !state.filter.excludeLogLevels.some(level => level === logMessage.lvl)
    } );
  }

  if (state.filter.includeLoggers.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return state.filter.includeLoggers.some(logger => logger === logMessage.lgr)
    } );
  }

  if (state.filter.excludeLoggers.length) {
    newLogMessages = newLogMessages.filter( logMessage => {
      return !state.filter.excludeLoggers.some(logger => logger === logMessage.lgr)
    } );
  }

  return { 
    defaultLogMessages: state.logMessages.defaultLogMessages,
    logMessages: newLogMessages,
  }
},{ toggleFilterIsOpened, toggleSettingsIsOpened, changeDefaultLogMessages })(App)