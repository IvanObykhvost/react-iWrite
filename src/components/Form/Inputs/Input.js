import React from 'react';
import PropTypes from 'prop-types';
import * as reactstrap from 'reactstrap';

export default function Input({ type, ...props }) {
    return (
        <reactstrap.Input 
            type={type}
            { ...props }
        />
    )
}

Input.type = {
    text: 'text',
    checkbox: 'checkbox'
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object
}