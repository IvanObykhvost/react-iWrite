import React  from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default function TagsInput ({...props}) {
    return (
        <Select.Creatable
            {...props}
            multi={true}
            showNewOptionAtTop = {true}
            openOnClick={false}
            closeOnSelect={false}
            
        />
    )
}