import React from 'react'
import Loading from './Loading'

class LoadingWithLabel extends React.Component
{
  render() {
    return (
      <div style={{display: 'table', marginLeft:'auto', marginRight:'auto', marginTop: '2em'}}>
        <div style={{display:'flex', margin: '0px auto'}}>
          <Loading style={{margin: '0px', alignSelf: 'center'}}/>
          <p style={{marginLeft: '1em'}}>{this.props.label}</p>
        </div>
      </div>
    )
  }
}

LoadingWithLabel.defaultProps = {
  label: 'Loading...',
}

export default LoadingWithLabel
