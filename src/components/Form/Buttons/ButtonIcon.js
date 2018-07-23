import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function ButtonIcon({ icon, ...props }) {
    return (
        <div 
           {...props}
        >
            <MuiThemeProvider>
                {icon}
            </MuiThemeProvider>
        </div>
    )
}

ButtonIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    props: PropTypes.object
}