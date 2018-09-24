import React from 'react'
import {connect} from 'react-redux'

import './Filter.css'
import SimpleMultiSelect from './SimpleMultiSelect'
import {closeFilter} from './AC'

class Filter extends React.Component
{
  state = {
    includeLogLevels: [],
    excludeLogLevels: [],
    includeLoggers: [],
    excludeLoggers: [],
  }

  handleCloseFilter = () => {
    this.props.closeFilter();
  }

  changeSelected(filedName, selectedOptions) {
    var newSelOptions = selectedOptions.map(option => option.value);
    this.setState({[filedName]: newSelOptions}, () => {
      this.props.onChange(this.getFilterData());
    });
  }

  handleIncludeLevelsChanged = (selectedOptions) => { this.changeSelected('includeLogLevels', selectedOptions); }

  handleExcludeLevelsChanged = (selectedOptions) => { this.changeSelected('excludeLogLevels', selectedOptions); }

  handleIncludeLoggersChanged = (selectedOptions) => { this.changeSelected('includeLoggers', selectedOptions); }

  handleExcludeLoggersChanged = (selectedOptions) => { this.changeSelected('excludeLoggers', selectedOptions); }

  getFilterData() {
    return {
      includeLogLevels: this.state.includeLogLevels,
      excludeLogLevels: this.state.excludeLogLevels,
      includeLoggers: this.state.includeLoggers,
      excludeLoggers: this.state.excludeLoggers,
      }
  }

  render() {
    var {isOpened, avLogLevels, avLoggers} = this.props;
    if( !isOpened ) return null;

    return (
      <div className="filter filter_opened">
        <form>
          <div>
            <div className="label" style= {{float: "left"}}>
              Include levels: </div>
            <SimpleMultiSelect options={avLogLevels}
                               onChange={this.handleIncludeLevelsChanged}/>
            <div className="label" style= {{float: "left"}}>
              Exclude levels: </div>
            <SimpleMultiSelect options={avLogLevels}
                               onChange={this.handleExcludeLevelsChanged}/>
            <div className="label" style= {{float: "left"}}>
              Include loggers: </div>
            <SimpleMultiSelect options={avLoggers}
                               onChange={this.handleIncludeLoggersChanged}/>
            <div className="label" style= {{float: "left"}}>
              Exclude loggers: </div>
            <SimpleMultiSelect options={avLoggers}
                               onChange={this.handleExcludeLoggersChanged}/>
          </div>
        </form>
        <p onClick={this.handleCloseFilter}>Close Filter</p>
      </div>
    );
  }
}

export default connect((state) => ({
  isOpened: state.navUi.isFilterOpen
}), {closeFilter})(Filter)
