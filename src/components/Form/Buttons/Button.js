import React from 'react';
import PropTypes from 'prop-types';
import * as reactstrap from 'reactstrap';

export default function Button({ name, ...props }) {
    return (
        <reactstrap.Button { ...props }>
            {name}
        </reactstrap.Button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    props: PropTypes.object
}