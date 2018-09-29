import React from 'react'

class SimpleMultiSelect extends React.Component {

  handleChange = (event) => {
    const newSelectedOptions = [...event.target.selectedOptions].map( sel => sel.value );
    this.props.onChange(newSelectedOptions);
  }

  renderOptions() {
    const {options, selectedOptions} = this.props;

    return options.map( opt => (
      <option selected={selectedOptions.some( sel => sel === opt )}>
        {opt}
      </option>
    ))
  }

  render() {
    return (
      <select multiple onChange={this.handleChange}>
        {this.renderOptions()}
      </select>
    )
  }
}

export default SimpleMultiSelect
