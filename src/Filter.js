import React from 'react'

import './Filter.css'
import LogLevelsFilter from './LogLevelsFilter'

class Filter extends React.Component
{
  state = {
    isOpened: false,
    includeLogLevels: [],
    excludeLogLevels: [],
    includeLoggers: [],
    excludeLoggers: [],
  }

  handleOpenFilter = () => {
    this.setState({ isOpened: true });
  }

  handleCloseFilter = () => {
    this.setState({ isOpened: false });
  }

  handleIncludeLevelsChanged = (selectedOptions) => {
    const {onChange} = this.props;
    
    var newIncludeLogLevels = selectedOptions.map(option => option.value);
    this.setState({includeLogLevels: newIncludeLogLevels}, () => {
      onChange(this.getFilterData());
    });
  }

  handleExcludeLevelsChanged = (selectedOptions) => {
    const {onChange} = this.props;
    
    var newExcludeLogLevels = selectedOptions.map(option => option.value);
    this.setState({excludeLogLevels: newExcludeLogLevels}, () => {
      onChange(this.getFilterData());
    });
  }

  handleIncludeLoggersChanged = (selectedOptions) => {
    const {onChange} = this.props;
    
    var newIncludeLoggers = selectedOptions.map(option => option.value);
    this.setState({includeLoggers: newIncludeLoggers}, () => {
      onChange(this.getFilterData());
    });
  }

  handleExcludeLoggersChanged = (selectedOptions) => {
    const {onChange} = this.props;
    
    var newExcludeLoggers = selectedOptions.map(option => option.value);
    this.setState({excludeLoggers: newExcludeLoggers}, () => {
      onChange(this.getFilterData());
    });
  }

  getFilterData() {
    return {
      includeLogLevels: this.state.includeLogLevels,
      excludeLogLevels: this.state.excludeLogLevels,
      includeLoggers: this.state.includeLoggers,
      excludeLoggers: this.state.excludeLoggers,
      }
  }

  render() {
    var {isOpened} = this.state;

    if( isOpened )
      return this.renderOpened();

    return (
      <div className="filter">
        <p onClick={this.handleOpenFilter}>Filter</p>
      </div>
    );
  }

  renderOpened() {
    const {avLogLevles, avLoggers} = this.props;

    return (
      <div className="filter filter_opened">
        <form>
          <div>
            <div className="label" style= {{float: "left"}}>
              Include levels: </div>
            <LogLevelsFilter avLogLevles={avLogLevles}
                             onChange={this.handleIncludeLevelsChanged}/>
            <div className="label" style= {{float: "left"}}>
              Exclude levels: </div>
            <LogLevelsFilter avLogLevles={avLogLevles}
                             onChange={this.handleExcludeLevelsChanged}/>
            <div className="label" style= {{float: "left"}}>
              Include loggers: </div>
            <LogLevelsFilter avLogLevles={avLoggers}
                             onChange={this.handleIncludeLoggersChanged}/>
            <div className="label" style= {{float: "left"}}>
              Exclude loggers: </div>
            <LogLevelsFilter avLogLevles={avLoggers}
                             onChange={this.handleExcludeLoggersChanged}/>
          </div>
        </form>
        <p onClick={this.handleCloseFilter}>Close Filter</p>
      </div>
    );
  }
}

export default Filter
