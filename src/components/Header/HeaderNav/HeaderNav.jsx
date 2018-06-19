import React, { Component } from 'react';
import ButtonNav from '../../Button/ButtonNav';

export default function HeaderNav(props) {
    console.log(props.currentUser);
    if (!props.currentUser) {
        return (
            <div className='header-nav' >
                <ButtonNav link={'/'}>Home</ButtonNav>
                <ButtonNav link={'/login/'}>Sign In</ButtonNav>
                <ButtonNav link={'/register/'}>Sign Up</ButtonNav>
            </div >
        )
    }

    else {
        return (
            <div className='header-nav' >
                <ButtonNav link={'/'}>Home</ButtonNav>
                <ButtonNav link={'/editor'}>New post</ButtonNav>
                {/*<ButtonNav link={'/editor/1'}>Edit post</ButtonNav>*/}
            </div >
        )
    }
}