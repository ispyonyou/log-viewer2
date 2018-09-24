import React from 'react'

import LogLevelsFilter from './LogLevelsFilter'

import './FilterNav.css'

class FilterNav extends React.Component {
  state = {
    isOpened: false,
  }

  handleOpenFilter = () => {
    this.changeIsOpened(true);
  }

  handleCloseFilter = () => {
    changeIsOpened(false);
  }

  changeIsOpened(newIsOpened) {
    const {onChange} = this.props;

    this.setState({ isOpened: newIsOpened }, () => {
      onChange(this.state.isOpened);
    });
  }

  render() {
    return ( 
      <div className="filter">
        <p onClick={this.handleOpenFilter}>Filter</p>
      </div>
    )
  }
}

export default FilterNav
