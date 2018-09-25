import React from 'react'
import Loading from './Loading'

const own_style = {
  display: 'table',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop: '2em'
}

class LoadingWithLabel extends React.Component
{
  render() {
    const own_style_ext = {...own_style, ...this.props.style}

    return (
      <div style={own_style_ext}>
        <div style={{display:'flex', margin: '0px auto'}}>
          <Loading style={{margin: '0px', alignSelf: 'center'}}
                   width={this.props.width}
                   height={this.props.height}
          />
          <p style={{marginTop: 'auto', marginBottom: 'auto', marginLeft: '1em'}}>{this.props.label}</p>
        </div>
      </div>
    )
  }
}

LoadingWithLabel.defaultProps = {
  label: 'Loading...',
  style: {},
  width: '40px',
  height: '40px',
}

export default LoadingWithLabel
