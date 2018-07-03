import React, { Component } from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import PropTypes from 'prop-types';

export default function Header(props) {

    return (
        <aside className='header' >
            <HeaderNav currentUser={props.currentUser} onLogout={props.onLogout} />            
        </aside >
    )
}

Header.propTypes = {
    currentUser: PropTypes.object,
    onLogout: PropTypes.func.isRequired
}