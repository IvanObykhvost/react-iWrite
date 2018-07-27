import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function ButtonNav({ link, name, icon}) {
    return (
        <Link to={link}
            className={`button-nav${icon ? ' icon' : ''}`}
        >
            {
                icon ?
                    <MuiThemeProvider>
                        {icon}
                    </MuiThemeProvider>
                    : 
                    null
            }
            <div className="name">
                {name}
            </div>
            
        </Link>
 
    )
        }
        
ButtonNav.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.object
}