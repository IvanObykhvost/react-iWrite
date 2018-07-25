import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col, Media } from 'reactstrap';
import Button from '../../../Form/Buttons/Button';

import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function PostPreview({post, isUser, onClick}) {
    const {author} = post;

    return (
        <div className='feed-post-preview'>
            <Row className="post-preview-header">
                <Col xs={1} md={1} >
                    <Link to={`/@${author.name}`}>
                        <Media 
                            className="post-userImage" 
                            src="http://getdrawings.com/img/user-silhouette-icon-3.png" 
                        />
                    </Link>
                </Col>
                <Col md={10}>
                    <Link to={`/@${author.name}`}>
                        {author.name}
                    </Link>
                    <br/>
                    {new Date(post.createdAt).toDateString()}
                </Col>
                <Col md={1} className="text-align-right"> 
                        <Button  
                            color="primary"
                            size="sm"
                            name={`${post.favouritesCount}`}
                            onClick={onClick}
                            disabled={!isUser}
                        />
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
