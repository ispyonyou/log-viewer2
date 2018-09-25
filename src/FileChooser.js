import React from 'react'
import LoadingWithLabel from './LoadingWithLabel'

class FileChooser extends React.Component
{
  state = {
    isReading: false
  }

  handleFileRead = (e) => {
    var {handleFileRead} = this.props
    handleFileRead(e)
    this.setState({isReading: false})
  }

  handleChange(file) {
    var {handleFileRead} = this.props
    this.setState({isReading: true})

    var fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file, 'cp1251')
  }

  render() {
    if(this.state.isReading) {
      return (
        <LoadingWithLabel label="Читаем файл..."
                          style={{marginTop: '0em'}}
                          width='20px'
                          height='20px'/>
      )
    }

    return <input type="file" onChange={ (e) => this.handleChange( e.target.files[0] )}></input>
  }
}

export default FileChooser