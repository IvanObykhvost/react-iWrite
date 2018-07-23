import React from 'react';
import PropTypes from 'prop-types';
import * as bootstrap from 'react-bootstrap';

export default function Button({ name, ...props }) {
    return (
        <bootstrap.Button { ...props }>
            {name}
        </bootstrap.Button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    props: PropTypes.object
}