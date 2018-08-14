import React from 'react';
import PropTypes from 'prop-types';
import * as reactstrap from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { color, size, type } from "./constants";

export default function ButtonWithIcon({ icon, name, color, outline, disabled, size, type, ...props }) {
    return (
        <reactstrap.Button className="button-with-icon"
            color={color}
            outline={outline}
            disabled={disabled}
            size={size}
            type={type}
            {...props}
        >
            <MuiThemeProvider>
                {icon}
            </MuiThemeProvider>
            {name}
        </reactstrap.Button >
    )
}

ButtonWithIcon.size = size;
ButtonWithIcon.color = color;
ButtonWithIcon.type = type;

ButtonWithIcon.defaultProps = {
    color: color.primary,
    type: type.button
}

ButtonWithIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    name:  PropTypes.string.isRequired,
    props: PropTypes.object,
    color: PropTypes.oneOf(Object.keys(color)),
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(Object.keys(size)),
    type: PropTypes.oneOf(Object.keys(type))
}