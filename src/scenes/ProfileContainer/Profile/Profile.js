import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Media } from 'reactstrap';
import ButtonLink from '../../../components/Form/Buttons/ButtonLink';
import TabContainer from '../../../components/TabContainer/TabContainer';
import { CheckImage } from "../../../utils/Operations";
import ButtonFollowContainer from '../../../components/Form/Buttons/ButtonFollowContainer/ButtonFollowContainer';

export default function Profile({profile, isUser, currentUser, tabList, onClickFollow}) {
    return (                 
        <div className="user-info">
            <div className="profile">
                <Row>
                    <Col md={{size: 10, offset: 1}} xs={10}>
                        <Media src={CheckImage(profile.image)} alt={profile.name} className="user-img"/>
                        <h4>{profile.name}</h4>
                        <p>{profile.bio}</p>
                        {
                            currentUser && 
                                isUser ? 
                                    <ButtonLink 
                                        to="/settings/"
                                        className="btn btn-sm btn-outline-secondary action-btn"
                                        name="Edit Profile Settings"
                                    />
                                    :
                                    <ButtonFollowContainer
                                        username={profile.name}
                                        following={profile.following}
                                    />
                        }
                    </Col>
                </Row>
            </div>
            <Container>
                <Row>
                    <Col md={{size: 10, offset: 1}} xs={12}>
                        <TabContainer tabList={tabList}/>
                    </Col>
                </Row>
            </Container>
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
