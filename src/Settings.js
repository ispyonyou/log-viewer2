import React from 'react'
import {connect} from 'react-redux'

import './Settings.css'
import {closeSettings, changeSettingsFormatSql, changeSettingsHighlightSql} from './AC'

class Settings extends React.Component
{
  handleCloseSettings = () => { this.props.closeSettings(); }

  handleFormatSqlClicked = (event) => { 
    this.props.changeSettingsFormatSql(event.target.checked);
  }

  handleHighlightSqlClicked = (event) => { 
    this.props.changeSettingsHighlightSql(event.target.checked);
  }

  getSettingsData() {
    return {
      formatSql: this.state.formatSql,
      highlightSql: this.state.highlightSql,
    }
  }

  render() {
    var {isOpened, formatSql, highlightSql} = this.props;

    if( !isOpened ) return null;

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
  isOpened: state.navUi.isSettingsOpen,
  formatSql: state.settings.formatSql,
  highlightSql: state.settings.highlightSql,
}), {closeSettings, changeSettingsFormatSql, changeSettingsHighlightSql})(Settings)
