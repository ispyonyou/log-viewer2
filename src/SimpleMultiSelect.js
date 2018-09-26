import React from 'react'
import Select from 'react-select'

const ClearIndicatorStyles = (base, state) => ({
    ...base,
    cursor: 'pointer',
    color: state.isFocused ? 'blue' : 'black',
  });

const ContainerStyles = (base, state) => ({
    ...base,
    cursor: 'pointer',
    color: state.isFocused ? 'red' : 'black',
    backgroundColor: 'red'
  });

class SimpleMultiSelect extends React.Component
{
    state = {
        selectedOptions: null,
    }

    handleChange = (selectedOptions) => {
        console.log(selectedOptions)
//        this.setState({selectedOptions}, () => {
//            this.props.onChange(selectedOptions)
//        });
        this.props.onChange(selectedOptions)
    }

    render() {
        const { selectedOptions } = this.state;
        const { options, defaultValue } = this.props;

        const optionsForSelect = options.map( v => { return { value: v, label: v } } );
        let defaultValueForSelect = [];
        if( defaultValue ) {
            defaultValueForSelect = defaultValue.map( v => { return { value: v, label: v } } )
        }

        return (
            <Select value={defaultValueForSelect}
              onChange={this.handleChange}
              options={optionsForSelect}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
            />
        )
    }
}

export default SimpleMultiSelect
