import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col, Media, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
// import ButtonDropdownContainer from '../../Form/Buttons/ButtonDropdownContainer';


export default function FollowerList({follower, onClick}) {
    const bio = follower.bio ? follower.bio : "- No Bio Provided -"
    return (
            <Col md={4} className='follower-card'>
                <Card>
                    <CardHeader>
                        <Link to={`/@${follower.name}`} className="user-card">
                            {follower.name}
                        </Link>
                        {/* <ButtonDropdownContainer>
                            <Link to={`/@${follower.name}`}>{follower.name}</Link>
                            <Link to={`/@${follower.name}`}>{follower.name}</Link>
                        </ButtonDropdownContainer> */}
                    </CardHeader>
                    <CardBody>
                        <CardText>{bio}</CardText>
                    </CardBody>
                    {/* <CardFooter>
                        
                    </CardFooter> */}
                </Card>
            </Col>
    )
}

FollowerList.propTypes = {
    follower: PropTypes.object.isRequired//,
    // onClick: PropTypes.func.isRequired
}
