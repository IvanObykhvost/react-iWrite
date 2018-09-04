import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col, Media } from 'reactstrap';
import { CheckImage, getDateFormat } from "../../../../utils/Operations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PostPreview({post, isUser, onClick}) {
    const {author} = post;
    let icon = post.favorited ? ['fas', 'heart']: ['far', 'heart'];
    return (
        <div className='post-preview'>
            <Row>
                <Col md={2}>
                    <div className='post-preview-user'>
                        <Link to={`/@${author.name}`}>
                            <Media 
                                className='post-preview-avatar'
                                src={CheckImage(author.image)} 
                            />
                        </Link>
                        <span className='post-preview-name'>
                            <Link to={`/@${author.name}`}>
                                {author.name}
                            </Link>
                        </span>
                    </div>
                </Col>
                <Col md={10} className='post-preview-body'>
                    <span className='post-preview-title'>
                        <Link to={'/article/' + post.id}>
                            <h5>{post.title}</h5>
                        </Link>
                    </span>
                    <span className='post-preview-message'>
                        {post.message}    
                    </span>
                </Col>
            </Row>
            <hr/>
            <Row className='post-preview-footer'>
                <Col md={5}>
                    {getDateFormat(post.createdAt)}
                    <b>·</b>
                    <span>
                        <FontAwesomeIcon
                            icon='heart'
                        />
                        {post.favouritesCount}
                    </span>
                    <b>·</b>
                    <span>
                        <FontAwesomeIcon
                            icon='comments'
                        />
                        {post.commentsCount}
                    </span>
                    <b>·</b>
                    <span>
                        <FontAwesomeIcon
                            icon={['far', 'chart-bar']}
                        />
                        40
                        views
                    </span>
                </Col>
                <Col md={7} className='post-preview-tags text-right'>
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
