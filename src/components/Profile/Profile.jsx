import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import  TabList  from '../common/TabList';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);       
    }
    
    componentWillMount() {
    //componentDidMount() {
        this.props.onLoad();
    }

    render() {       
        return (
            <div>
                {this.renderProfile()}            
                <TabList tabList={this.props.tabList} onTabClick={this.props.onTabClick} />
            </div>
         )
    }

    renderProfile() {
        const profile = this.props.profile;
        
        if (!profile.error && !profile.profile) {
            return <div>Please wait, profile is loading...</div>
        }

        else {
            if (profile.error) {
                return <div>Error! No user with such username.</div>
            }

            else {
                return (
                <div>
                    <h1>{profile.profile.name}</h1>
                    <h2>{profile.profile.bio}</h2>
                </div>)
            }
        }
    }
    
}


Profile.propTypes = {
    currentUser: PropTypes.object.isRequired,
}
