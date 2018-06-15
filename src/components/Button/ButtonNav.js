import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default function ButtonNav({ link, children }) {

    return (
        <Link to={link}
            className='button-nav'
        >
            {children}
        </Link>
    )
}