import React from 'react'

import './Settings.css'

class Settings extends React.Component
{
  state = {
    isOpened: false,
    formatSql: true,
    highlightSql: true,
  }

  handleOpenSettings = () => {
    this.setState({ isOpened: true });
  }

  handleCloseSettings = () => {
    this.setState({ isOpened: false });
  }

  handleFormatSqlClicked = (event) => {
    const {onChange} = this.props;
    const {target} = event;

    this.setState({formatSql: target.checked}, () => {
      onChange(this.getSettingsData());
    });
  }

  handleHighlightSqlClicked = (event) => {
    const {onChange} = this.props;
    const {target} = event;

    this.setState({highlightSql: target.checked}, () => {
      onChange(this.getSettingsData());
    });
  }

  getSettingsData() {
    return {
      formatSql: this.state.formatSql,
      highlightSql: this.state.highlightSql,
    }
  }

  render() {
    var {isOpened} = this.state;

    if( isOpened )
      return this.renderOpened();

    return (
      <div className="settings">
        <p onClick={this.handleOpenSettings}>Settings</p>
      </div>
    );
  }

  renderOpened() {
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

export default Settings
