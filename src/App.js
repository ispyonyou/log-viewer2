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
  handleShowFilter = () => { this.props.toggleFilterIsOpened() }

  handleShowSettings = () => { this.props.toggleSettingsIsOpened() }

  handleCloseSettings = () => { this.setState({isSettingsOpened: false}) }

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
 
    var logLevelsSet = new Set();
    defaultLogMessages.forEach( (msg) => {
      logLevelsSet.add(msg.lvl);
    });

    return [...logLevelsSet];
  }

  getLoggers() {
    const { defaultLogMessages } = this.props
 
    var loggersSet = new Set();
    defaultLogMessages.forEach( (msg) => {
      loggersSet.add(msg.lgr);
    });

    return [...loggersSet];
  }

  render() {
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
          <Filter avLogLevels = {logLevels}
                  avLoggers={loggers} />
          <Settings />
        </div>
        <div className="messagesList">
          <PaginatedLogMessagesList logMessages={logMessages} perPage={500} />
        </div>
      </div>
    )
  }
}

export default connect((state) =>{
//  var newLogMessages = state.logMessages.defaultLogMessages
//
//  if (state.filter.includeLogLevels.length) {
//    newLogMessages = newLogMessages.filter( logMessage => {
//      return state.filter.includeLogLevels.some(level => level === logMessage.lvl)
//    } );
//  }
//
//  if (state.filter.excludeLogLevels.length) {
//    newLogMessages = newLogMessages.filter( logMessage => {
//      return !state.filter.excludeLogLevels.some(level => level === logMessage.lvl)
//    } );
//  }
//
//  if (state.filter.includeLoggers.length) {
//    newLogMessages = newLogMessages.filter( logMessage => {
//      return state.filter.includeLoggers.some(logger => logger === logMessage.lgr)
//    } );
//  }
//
//  if (state.filter.excludeLoggers.length) {
//    newLogMessages = newLogMessages.filter( logMessage => {
//      return !state.filter.excludeLoggers.some(logger => logger === logMessage.lgr)
//    } );
//  }

  return { 
    defaultLogMessages: state.logMessages.defaultLogMessages,
    logMessages: state.logMessages.logMessages,
  }
},{ toggleFilterIsOpened, toggleSettingsIsOpened, changeDefaultLogMessages })(App)