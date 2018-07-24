import React  from 'react';
import PropTypes from 'prop-types';

export default function Label({className, message}) {
    return (
        <div className={className}>{message}</div>
    )
}

Label.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string
}