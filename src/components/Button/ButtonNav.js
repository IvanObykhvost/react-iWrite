import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeIcon from 'material-ui/svg-icons/action/home';

export default function ButtonNav({ link, children, icon }) {

    return (
        <Link to={link}
            className='button-nav'
        >
            {
                //icon ?
                //<MuiThemeProvider>
                //    {icon}
                //</MuiThemeProvider>
                //: null
            }
            {children}
        </Link>
 
    )
}