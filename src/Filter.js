import React from 'react'
import {connect} from 'react-redux'

import './Filter.css'
import SimpleMultiSelect from './SimpleMultiSelect'
import {closeFilter, changeFltIncludeLogLevevls, changeFltExcludeLogLevevls, 
  changeFltIncludeLoggers, changeFltExcludeLoggers} from './AC'


class Filter extends React.Component
{
  handleCloseFilter = () => {
    this.props.closeFilter();
  }

  handleIncludeLevelsChanged = (selectedOptions) => { 
    this.props.changeFltIncludeLogLevevls(this.getSelectedValues(selectedOptions))
  }

  handleExcludeLevelsChanged = (selectedOptions) => { 
    this.props.changeFltExcludeLogLevevls(this.getSelectedValues(selectedOptions))
  }

  handleIncludeLoggersChanged = (selectedOptions) => { 
    this.props.changeFltIncludeLoggers(this.getSelectedValues(selectedOptions))
  }

  handleExcludeLoggersChanged = (selectedOptions) => {
    this.props.changeFltExcludeLoggers(this.getSelectedValues(selectedOptions))
  }

  getSelectedValues(selectedOptions) {
    return selectedOptions.map(option => option.value);
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
  isOpened: state.navUi.isFilterOpen,
  includeLogLevels: state.filter.includeLogLevels,
}), {closeFilter, changeFltIncludeLogLevevls, changeFltExcludeLogLevevls, 
  changeFltIncludeLoggers, changeFltExcludeLoggers})(Filter)
