import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeIcon from 'material-ui/svg-icons/action/home';
import PropTypes from 'prop-types';

export default function ButtonNav({ link, children, icon, onLogout }) {


    return (
        <Link to={link}
            className='button-nav'
            onClick={e =>
                        {
                            onLogout ?
                                onLogout() :
                                null
                        }                
                    }
        >
            {
                icon ?
                <MuiThemeProvider>
                    {icon}
                </MuiThemeProvider>
                : null
            }
            {children}
        </Link>
 
    )
        }
        
ButtonNav.propTypes = {
    link: PropTypes.string.isRequired,
    onLogout: PropTypes.func
}