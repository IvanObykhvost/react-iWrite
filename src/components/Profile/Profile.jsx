import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TabList from '../common/TabList';
import PostList from '../common/PostList';
import EditProfileSettings from './buttons/EditProfileSettings';
import FollowUser from './buttons/FollowUser'; 

export default class Profile extends React.Component {
    constructor(props) {
        super(props);       
    }
    
    componentDidMount() {
        this.props.onLoad();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.username !== this.props.username) {
            this.props.onLoad();
        }
    }

    render() {     
        const { tabList, posts, onTabClick } = this.props;        

        return (                     
            <div className="profile-page">                    
                {this.renderProfile()}                    
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <div className="articles-toggle">
                                <TabList tabList={tabList} onTabClick={onTabClick} />
                            </div>
                            <PostList posts={posts} />
                        </div>                       
                    </div>
                </div>
            </div>
         )
    }

    renderProfile() {
        const { profile: { profile }, currentUser, profile: { error } , isUser } = this.props;
        
        if (!error && !profile) {
            return <div>Please wait, profile is loading...</div>
        }

        else {
            if (error) {
                return <div>Error! No user with such username.</div>
            }

            else {
                return (
                    <div className="user-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-10 offset-md-1">
                                    {/*<img src={profile.image} className="user-img" alt={profile.name} />*/}
                                    <h4>{profile.name}</h4>
                                    <p>{profile.bio}</p>
                                    {
                                        currentUser && isUser ?
                                            <EditProfileSettings /> :    
                                            null
                                    }
                                    {
                                        currentUser && !isUser ?                                                                          
                                            <FollowUser currentUser={currentUser} user={profile} onFollowUser={this.props.onFollowUser} /> :
                                            null
                                    }                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }    
}

Profile.propTypes = {
    currentUser: PropTypes.object,
    profile: PropTypes.object.isRequired,
    tabList: PropTypes.array.isRequired,
    isUser: PropTypes.bool.isRequired,
    posts: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired,
    onTabClick: PropTypes.func.isRequired,
}
