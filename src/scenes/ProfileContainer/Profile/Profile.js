import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import ButtonLink from '../../../components/Form/Buttons/ButtonLink';
import ButtonFollowUser from './ButtonFollowUser/ButtonFollowUser';
import TabContainer from '../../../components/TabContainer/TabContainer';

export default function Profile({profile, isUser, currentUser, tabList, onClickFollow}) {
    return (                 
        <div className="user-info">
            <div className="container">
                <Row>
                    <Col xs={10} md={10} className="offset-md-1">
                        <Image src={profile.image} alt={profile.name} className="user-img" thumbnail/>
                        <h4>{profile.name}</h4>
                        <p>{profile.bio}</p>
                        {
                            currentUser ? 
                                isUser ? 
                                    <ButtonLink 
                                        to="/settings/"
                                        className="btn btn-sm btn-outline-secondary action-btn"
                                        name="Edit Profile Settings"
                                    />
                                    :
                                    <ButtonFollowUser 
                                        username={profile.name}
                                        following={profile.following}
                                        onClickFollow={onClickFollow}
                                    />
                                :
                                null
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={10} className="offset-md-1">
                        <TabContainer tabList={tabList}/>
                    </Col>
                </Row>
            </div>
        </div>   
        )
}

Profile.propTypes = {
    currentUser: PropTypes.object,
    profile: PropTypes.object.isRequired,
    isUser: PropTypes.bool.isRequired,
    onClickFollow: PropTypes.func.isRequired,
    tabList: PropTypes.array.isRequired,
}
