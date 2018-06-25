import React, { Component } from 'react';
import ButtonNav from '../../Button/ButtonNav';
import HomeIcon from 'material-ui/svg-icons/action/home';
import QueueIcon from 'material-ui/svg-icons/av/queue';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import ProfileIcon from 'material-ui/svg-icons/action/account-box';

export default function HeaderNav({ currentUser }) {    
    if (!currentUser) {
        return (
            <div className='header-nav' >
                <ButtonNav link={'/'} icon={<HomeIcon/>}>Home</ButtonNav>
                <ButtonNav link={'/login/'}>Sign In</ButtonNav>
                <ButtonNav link={'/register/'}>Sign Up</ButtonNav>
            </div >
        )
    }

    else {
        return (
            <div className='header-nav' >
                <ButtonNav link={'/'} icon={<HomeIcon/>}>Home</ButtonNav>
                <ButtonNav link={'/editor/'} icon={<QueueIcon/>}>New post</ButtonNav>
                {/*<ButtonNav link={'/editor/1'}>Edit post</ButtonNav>*/}
                <ButtonNav link={'/settings/'} icon={<SettingIcon />}>Settings</ButtonNav>
                <ButtonNav link={'/@' + currentUser.name} icon={<ProfileIcon />}>{currentUser.name}</ButtonNav>
            </div>
        )
    }
}