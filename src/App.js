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

  handleLogLevelsChanged = (selectedOptions) => {
    var newLogMessages = this.state.defaultLogMessages || []

    if(selectedOptions.length) {
      newLogMessages = newLogMessages.filter( logMessage => {
        return selectedOptions.some(option => option.value === logMessage.lvl)
      } );
    }

    this.setState({logMessages: newLogMessages})
  }

  handleFilterChanged = (filter) => {
    var newLogMessages = this.state.defaultLogMessages || []
    console.log('filter', filter)

    if (filter.includeLogLevels.length) {
      newLogMessages = newLogMessages.filter( logMessage => {
        return filter.includeLogLevels.some(level => level === logMessage.lvl)
      } );

    }

    this.setState({logMessages: newLogMessages})
  }

  render() {
    return (
      <div>
        <FileChooser handleFileRead={this.handleFileRead} />        
        <Filter onChange={this.handleFilterChanged} />
        <PaginatedLogMessagesList logMessages={this.state.logMessages} perPage={500} />
      </div>
    )
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
}

export default App