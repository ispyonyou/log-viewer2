import React from 'react'
import {connect} from 'react-redux'

import './Filter.css'
import SimpleMultiSelect from './SimpleMultiSelect'

import {closeFilter, filterLogMessages, changeFltLogLevels,
  changeFltLoggers
} from './AC'


class Filter extends React.Component
{
  handleCloseFilter = () => {
    this.props.closeFilter();
  }

  handleLevelsChanged = (selectedOptions) => {
    this.props.changeFltLogLevels(this.getSelectedValues(selectedOptions))
    this.props.filterLogMessages()
  }

  handleLoggersChanged = (selectedOptions) => {
    this.props.changeFltLoggers(this.getSelectedValues(selectedOptions))
    this.props.filterLogMessages()
  }

  handleIncludeLevelsChanged = (selectedOptions) => { 
    this.props.changeFltIncludeLogLevevls(this.getSelectedValues(selectedOptions))
    this.props.filterLogMessages()
  }

  getSelectedValues(selectedOptions) {
    return selectedOptions.map(option => option.value).sort();
  }

  render() {
    const {isOpened, avLogLevels, avLoggers, logLevels, loggers} = this.props;
    if( !isOpened ) return null;

    const sortedLogLevels = avLogLevels.sort();
    const sortedLoggers = avLoggers.sort();

    return (
      <div className="filter filter_opened">
        <form>
          <div>
            <div className="label" style= {{float: "left"}}>
              Уровни: </div>
            <SimpleMultiSelect options={sortedLogLevels}
                               defaultValue={logLevels}
                               onChange={this.handleLevelsChanged}/>
            <div className="label" style= {{float: "left"}}>
              Логгеры: </div>
            <SimpleMultiSelect options={sortedLoggers}
                               defaultValue={loggers}
                               onChange={this.handleLoggersChanged}/>
          </div>
        </form>
        <p onClick={this.handleCloseFilter}>Close Filter</p>
      </div>
    );
  }
}

export default connect((state) => ({
  isOpened: state.navUi.isFilterOpen,
  logLevels: state.filter.logLevels,
  loggers: state.filter.loggers,
}), {closeFilter, filterLogMessages, 
  changeFltLogLevels, changeFltLoggers
})(Filter)
