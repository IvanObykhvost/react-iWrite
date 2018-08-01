import React from 'react';
import PropTypes from 'prop-types';
import * as reactstrap from 'reactstrap';
import { CheckFalseOrTrue } from '../../../utils/Operations';

export default function Alert({ message, color }) {
    return (
        <reactstrap.Alert  
            color={color}
            isOpen={CheckFalseOrTrue(message)}
        >
            {message}
        </reactstrap.Alert >
    )
}

const color = {
    success: 'success',
    danger: 'danger',
    info: 'info'
}

Alert.color = color;

Alert.propTypes = {
    message: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(color))
}
