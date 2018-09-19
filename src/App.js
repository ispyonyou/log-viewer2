"use strict";

import React from 'react'

import FileChooser from './FileChooser'
import LogLevelsFilter from './LogLevelsFilter'
import LogMessagesList from './LogMessagesList'

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

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <FileChooser handleFileRead={this.handleFileRead} />
        <LogLevelsFilter onChange={this.handleLogLevelsChanged}/>
        <LogMessagesList logMessages={this.state.logMessages} />
      </div>
    )
  }

  handleFileRead = (e) => {
//    console.log(e.target.result)

    var jsonStr = "[" + e.target.result
    jsonStr = jsonStr.substr(0, jsonStr.length-1) + "]"

//    console.log(asd)

    var newDefaultLogMessages = JSON.parse(jsonStr)
    this.setState( {
      defaultLogMessages: newDefaultLogMessages,
      logMessages: newDefaultLogMessages
    } )
  }
}

export default App