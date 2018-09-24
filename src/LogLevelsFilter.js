import React from 'react'
import Select from 'react-select'

class LogLevelsFilter extends React.Component
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
        const { avLogLevels } = this.props;

        var options = avLogLevels.map( level => { return { value: level, label: level } } )

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
