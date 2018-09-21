import React from 'react'

import './Filter.css'
import LogLevelsFilter from './LogLevelsFilter'

class Filter extends React.Component
{
  state = {
    isOpened: false,
    includeLogLevels: [],
    excludeLogLevels: [],
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

  getFilterData() {
    return {
      includeLogLevels: this.state.includeLogLevels,
      excludeLogLevels: this.state.excludeLogLevels,
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
    const {avLogLevles} = this.props;

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
          </div>
        </form>
        <p onClick={this.handleCloseFilter}>Close Filter</p>
      </div>
    );
  }
}

export default Filter
