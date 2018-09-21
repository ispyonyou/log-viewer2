import React from 'react'

import './LogMessage.css'

class LogMessage extends React.Component
{
  render() {
    const {lvl, lgr, msg} = this.props.logMessage

    return (
      <div className="message_row">
        <ul className="message_row_ul">
          <li className="log_level">{lvl}</li>
          <li className="logger">{lgr}</li>
        </ul>
        <p className="log_message">{msg}</p>
      </div>
    )
  }

}

export default LogMessage
