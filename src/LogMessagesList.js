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
    const {logMessages} = this.props


    if (!logMessages || !logMessages.length)
      return <p>No messages</p>

    console.log('logMessages.length - ', logMessages.length);

    return (
      <div>
        {logMessages.map( logMessage => <LogMessage logMessage={logMessage} />)}
      </div>
    )
  }
}

export default LogMessagesList
