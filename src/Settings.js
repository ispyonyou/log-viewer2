import React from 'react'
import {connect} from 'react-redux'

import './Settings.css'
import {closeSettings} from './AC'

class Settings extends React.Component
{
  state = {
    formatSql: true,
    highlightSql: true,
  }

  handleCloseSettings = () => { this.props.closeSettings(); }

  handleCheckChanged = (fieldName, event) => {
    this.setState({[fieldName]: event.target.checked}, () => {
      this.props.onChange(this.getSettingsData());
    });
  }

  handleFormatSqlClicked = (event) => { this.handleCheckChanged( 'formatSql', event ); }

  handleHighlightSqlClicked = (event) => { this.handleCheckChanged( 'highlightSql', event ); }

  getSettingsData() {
    return {
      formatSql: this.state.formatSql,
      highlightSql: this.state.highlightSql,
    }
  }

  render() {
    var {isOpened} = this.props;

    if( !isOpened ) return null;

    const {formatSql, highlightSql} = this.state

    return (
      <div className="settings settings_opened">
          <div>
            <input type="checkbox" id="format_sql" checked={formatSql} onChange={this.handleFormatSqlClicked}/>
            <label htmlFor="format_sql"> Форматировать SQL</label>
          </div>
          <div>
            <input type="checkbox" id="highlight_sql" checked={highlightSql} onChange={this.handleHighlightSqlClicked}/>
            <label htmlFor="highlight_sql"> Подсвечивать SQL</label>
          </div>
          <p onClick={this.handleCloseSettings}>Close Settings</p>
      </div>
    );
  }
}

export default connect((state) => ({
  isOpened: state.navUi.isSettingsOpen
}), {closeSettings})(Settings)
