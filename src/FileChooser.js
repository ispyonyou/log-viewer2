import React from 'react'
import LoadingWithLabel from './LoadingWithLabel'

class FileChooser extends React.Component
{
  state = {
    isReading: false,
    fileName: 'Выберите файл',
  }

  handleFileRead = (e) => {
    var {handleFileRead} = this.props
    handleFileRead(e)
    this.setState({isReading: false})
  }

  handleChange(file) {
    this.setState({
      fileName: file.name, 
      isReading: true,
    })

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

    return (
      <div style={{display: 'inline-block'}}>
        <input type="file" id="fileChooser" onChange={ (e) => this.handleChange( e.target.files[0] )} style={{display: 'none', opacity:0, width:0}}></input>
        <label htmlFor="fileChooser">{this.state.fileName}</label>
      </div>
    )
  }
}

export default FileChooser