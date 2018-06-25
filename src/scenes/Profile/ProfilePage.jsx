import React, { Component } from 'react';
import ProfileContainer from '../../components/Profile/ProfileContainer'

export default function ProfilePage(props) {
    return (
        <ProfileContainer username={ props.match.params.username }/>
    )
}



