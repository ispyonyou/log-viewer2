import React from 'react'
import Select from 'react-select'

class SimpleMultiSelect extends React.Component
{
    state = {
        selectedOptions: null,
    }

    handleChange = (selectedOptions) => {
        this.setState({selectedOptions}, () => {
            this.props.onChange(selectedOptions)
        });
    }

    render() {
        const { selectedOptions } = this.state;
        const { options } = this.props;

        var optionsForSelect = options.map( level => { return { value: level, label: level } } )

        return (
            <Select value={selectedOptions}
              onChange={this.handleChange}
              options={optionsForSelect}
              isMulti
            />
        )
    }
}

export default SimpleMultiSelect
