import React from 'react'
import './NavItem.css'

class NavItem extends React.Component {
  handleClicked = () => {
    const {onClick} = this.props;
    onClick();
  }

  render() {
    const {label} = this.props;

    return ( 
      <div className="nav_item" onClick={this.handleClicked}>
        {label}
      </div>
    )
  }
}

export default NavItem
