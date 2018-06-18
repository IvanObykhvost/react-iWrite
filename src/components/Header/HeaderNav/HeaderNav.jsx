import React, { Component } from 'react';
import ButtonNav from '../../Button/ButtonNav';

export default function HeaderNav() {

    return (
        <div className='header-nav' >
            <ButtonNav link={'/'}>Home</ButtonNav>
            <ButtonNav link={'/editor'}>New post</ButtonNav>
            <ButtonNav link={'/editor/1'}>Edit post</ButtonNav>
        </div >
    )
}