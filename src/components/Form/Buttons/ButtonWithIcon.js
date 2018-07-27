import React from 'react';
import PropTypes from 'prop-types';
import * as reactstrap from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function ButtonWithIcon({ icon, name, ...props }) {
    return (
        <reactstrap.Button className="button-with-icon"
           {...props}
        >
            <MuiThemeProvider>
                {icon}
            </MuiThemeProvider>
            {name}
        </reactstrap.Button >
    )
}

ButtonWithIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    name:  PropTypes.string.isRequired,
    props: PropTypes.object
}