import React from 'react'

import './Filter.css'
import LogLevelsFilter from './LogLevelsFilter'

class Filter extends React.Component
{
  state = {
    isOpened: false,
    includeLogLevels: [],
  }

  handleOpenFilter = () => {
    this.setState({ isOpened: true });
  }

  handleCloseFilter = () => {
    this.setState({ isOpened: false });
  }

  handleLogLevelsChanged = (selectedOptions) => {
    console.log(selectedOptions)
    var newIncludeLogLevels = selectedOptions.map(option => option.value);
    console.log(newIncludeLogLevels)
    this.setState({includeLogLevels: newIncludeLogLevels});

    const {onChange} = this.props;
    onChange({includeLogLevels: newIncludeLogLevels});
  }

  getFilterData() {
    return {
      includeLogLevels: this.state.includeLogLevels,
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

//  <label htmlFor="includeLevels" className="label">

  renderOpened() {
    return (
      <div className="filter filter_opened">
        <form>
          <div>
            <div className="label" style= {{float: "left"}}>
              Include levels: </div>
            <LogLevelsFilter  name="includeLevels" onChange={this.handleLogLevelsChanged}/>
            <div className="label" style= {{float: "left"}}>
              Exclude levels: </div>
            <LogLevelsFilter  name="execludeLevels" onChange={this.handleLogLevelsChanged}/>
          </div>
        </form>
        <p onClick={this.handleCloseFilter}>Close Filter</p>
      </div>
    );
  }
}

export default Filter
