import React from 'react'

import LogMessage from './LogMessage'

class LogMessagesList extends React.Component
{
  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    )
    ;
  }

  getBody() {
    const {logMessages, settings} = this.props


    if (!logMessages || !logMessages.length)
      return <p>No messages</p>

    return (
      <div>
        {logMessages.map( logMessage => <LogMessage logMessage={logMessage} settings={settings} key={logMessage.id}/>)}
      </div>
    )
  }
}

export default LogMessagesList
