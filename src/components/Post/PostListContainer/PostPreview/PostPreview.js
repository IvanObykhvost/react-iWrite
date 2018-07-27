import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col, Media } from 'reactstrap';
import Button from '../../../Form/Buttons/Button';
import { CheckImage } from "../../../../utils/Operations";

import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import ButtonWithIcon from '../../../Form/Buttons/ButtonWithIcon';

export default function PostPreview({post, isUser, onClick}) {
    const {author} = post;
    let icon = post.favorited ? <FavoriteIcon width={2} color="blue"/> : <FavoriteBorderIcon color="blue"/>;
    return (
        <div className='feed-post-preview'>
            <Row className="post-preview-header">
                <Col xs={1} md={1} >
                    <Link to={`/@${author.name}`}>
                        <Media 
                            className="post-userImage" 
                            src={CheckImage(author.image)} 
                        />
                    </Link>
                </Col>
                <Col md={9}>
                    <Link to={`/@${author.name}`}>
                        {author.name}
                    </Link>
                    <br/>
                    {new Date(post.createdAt).toDateString()}
                </Col>
                <Col md={2} className="text-align-right"> 
                        <ButtonWithIcon  
                            color="primary"
                            size="sm"
                            icon={icon}
                            name={`${post.favouritesCount}`}
                            onClick={onClick}
                            outline 
                            disabled={!isUser}
                        />
                        {/* <Button  
                            color="primary"
                            size="sm"
                            name={`${post.favouritesCount}`}
                            onClick={onClick}
                            disabled={!isUser}
                        /> */}
                </Col>
            </Row>
            
            <Link to={'/article/' + post.id}>
                <Row className="post-preview-body">
                    <Col md={12}>
                        <h5>{post.title}</h5>
                        <p>{post.topic}</p>
                    </Col>
                </Row>
            </Link>
            <Row className="justify-content-between">
                    <Col md={4} >
                        <Link to={'/article/' + post.id}>
                            <span>Read more</span>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <ul className='tag-list'>
                            {post.tags.map((tag, index) => <li key={index}>{tag}</li>)}
                        </ul>
                    </Col>
                </Row>
        </div>
    )
}

PostPreview.propTypes = {
    post: PropTypes.object.isRequired,
    isUser: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}
