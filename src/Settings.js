import React from 'react'
import {connect} from 'react-redux'

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
    var {formatSql, highlightSql} = this.props;

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
          <p className="btn close_btn" onClick={this.handleCloseSettings}>Close Settings</p>
      </div>
    );
  }
}

export default connect((state) => ({
  formatSql: state.settings.formatSql,
  highlightSql: state.settings.highlightSql,
}), {closeSettings, changeSettingsFormatSql, changeSettingsHighlightSql})(Settings)
