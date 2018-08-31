import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col, Media, Card,  CardFooter, CardBody, CardText } from 'reactstrap';
import { CheckImage } from "../../../utils/Operations";
import ButtonFollowContainer from '../../Form/Buttons/ButtonFollowContainer/ButtonFollowContainer';
import ButtonProfileContainer from '../../Form/Buttons/ButtonProfileContainer/ButtonProfileContainer';


export default function FollowerList({user, onClick}) {
    const bio = user.bio ? user.bio : "- No Bio Provided -"
    return (
            <Col md={4} className='card-user'>
                <Card>
                    <CardBody>
                        <Link to={`/@${user.name}`}>
                            <Media src={CheckImage(user.image)} alt={user.name}/>
                        </Link>
                        <CardText>
                            <Link to={`/@${user.name}`}>
                                {user.name}
                            </Link>
                        </CardText>
                        <hr/>
                        <CardText className='bio'>{bio}</CardText>
                        <hr/>
                        <ButtonFollowContainer
                            username={user.name}
                            following={user.following}
                        />
                    </CardBody>
                    <CardFooter>
                        <Row>
                            <Col className="posts" md={4}> 
                                <span>{user.post}</span>
                                <span>posts</span>
                            </Col>
                            <Col className="followers" md={4}> 
                                <span>{user.followers}</span>
                                <span>followers</span>
                            </Col>
                            <Col className="favorite" md={4}> 
                                <span>{user.favorites}</span>
                                <span>favorites</span>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Col>
    )
}

FollowerList.propTypes = {
    user: PropTypes.object.isRequired//,
    // onClick: PropTypes.func.isRequired
}
