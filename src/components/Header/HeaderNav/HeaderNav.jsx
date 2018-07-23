import React from 'react';
import ButtonNav from '../../common/Buttons/ButtonNav';
import HomeIcon from 'material-ui/svg-icons/action/home';
import QueueIcon from 'material-ui/svg-icons/av/queue';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import ProfileIcon from 'material-ui/svg-icons/action/account-box';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';
import PropTypes from 'prop-types';

export default function HeaderNav({ currentUser, onLogout }) {    
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
                <ButtonNav link={'/settings/'} icon={<SettingIcon />}>Settings</ButtonNav>
                <ButtonNav link={'/@' + currentUser.name} icon={<ProfileIcon />}>{currentUser.name}</ButtonNav> 
                <ButtonNav link={'/'} onLogout={onLogout} icon={<ExitIcon/>}>Logout</ButtonNav>         
            </div>
        )
    }
}

HeaderNav.propTypes = {
    currentUser: PropTypes.object,
    onLogout: PropTypes.func.isRequired
}