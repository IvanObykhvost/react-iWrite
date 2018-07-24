import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function ButtonNav({ link, name, icon}) {
    return (
        <Link to={link}
            className='button-nav'
        >
            {/* {
                icon ?
                <MuiThemeProvider>
                    {icon}
                </MuiThemeProvider>
                : null
            } */}
            
            {name}
        </Link>
 
    )
        }
        
ButtonNav.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.object
}