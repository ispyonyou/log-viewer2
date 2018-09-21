import React from 'react'
import Select from 'react-select'

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
        const { avLogLevles, onChange } = this.props;

        var options = avLogLevles.map( level => { return { value: level, label: level } } )

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
