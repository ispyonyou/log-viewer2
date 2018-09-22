import React from 'react'
import Highlight from 'react-highlight'
import sqlFormatter from 'sql-formatter'

import './Highlight.css'
import './LogMessage.css'

class LogMessage extends React.Component
{
  render() {
    const {lvl, lgr, msg} = this.props.logMessage;


    return (
      <div className="message_row">
        <ul className="message_row_ul">
          <li className="log_level">{lvl}</li>
          <li className="logger">{lgr}</li>
        </ul>
        {this.getLogMessage()}
      </div>
    )
  }

  getLogMessage() {
    const {settings} = this.props
    const {lgr, msg} = this.props.logMessage;

    if (lgr.match(/TwQuery\(.+\)/)) {
      var formattedMsg = msg;
      if (settings.formatSql){ 
        formattedMsg = sqlFormatter.format(msg);
      }

      return (
        <Highlight className="sql">{formattedMsg}</Highlight>
      )
    }

    return <p className="log_message">{msg}</p>
  }

}

export default LogMessage
