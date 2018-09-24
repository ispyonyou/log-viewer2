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
          <li className="log_level" key="log_level">{lvl}</li>
          <li className="logger" key="logger">{lgr}</li>
        </ul>
        {this.getLogMessage()}
      </div>
    )
  }

  getLogMessage() {
    const {settings} = this.props
    const {lgr, msg} = this.props.logMessage;

    var msgText = msg;

    var isSql = lgr.match(/TwQuery\(.+\)/);
    if (isSql) {
      msgText = this.getSqlLogMessageText(msg);
    }

    if (isSql && settings.highlightSql ) {
      return (
        <Highlight className="sql">{msgText}</Highlight>
      )
    }

    return <p className="log_message">{msgText}</p>
  }

  getSqlLogMessageText(msg) {
    const {settings} = this.props;

    if(!settings.formatSql) {
      return msg;
    }

    return sqlFormatter.format(msg)
  }
}

export default LogMessage
