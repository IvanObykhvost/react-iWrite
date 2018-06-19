import React, { Component } from 'react';
import HeaderNav from './HeaderNav/HeaderNav';


export default function Header(props) {

    return (
        <aside className='header' >           
                <HeaderNav currentUser={props.currentUser} />            
        </aside >
    )
}