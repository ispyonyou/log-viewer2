import React from 'react'

class FileChooser extends React.Component
{

  handleFileRead = (e) => {
    console.log(e.target.result)
  }

  handleChange(file) {
    var {handleFileRead} = this.props

    var fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file, 'cp1251')
  }

  render() {
    return <input type="file" onChange={ (e) => this.handleChange( e.target.files[0] )}></input>
  }
}

export default FileChooser