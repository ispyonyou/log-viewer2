import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'DEBUG', label: 'DEBUG' },
    { value: 'ERROR', label: 'ERROR' },
    { value: 'INFO', label: 'INFO' },
    { value: 'TRACE', label: 'TRACE' },
    
]

class LogLevelsFilter extends React.Component
{
    state = {
        selectedOptions: null,
    }

    handleChange = (selectedOptions) => {
        const { onChange } = this.props;
        onChange(selectedOptions);


        this.setState({selectedOptions});
    }

    render() {
        const { selectedOptions } = this.state;
        const { onChange } = this.props;

        return (
            <Select value={selectedOptions}
              onChange={this.handleChange}
              options={options}
              isMulti
            />
        )
    }
}

export default LogLevelsFilter
