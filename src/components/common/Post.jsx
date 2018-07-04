import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

export default function Post({ post }) {
    return (
        <Row className='feed-post-preview'>
            <Col md={10}> 
                UserName
                Date
            </Col>
            <Col md={2} className="pull-right"> 
                like
            </Col>
                
            <Link to={'/article/' + post.id}>
            <Row>
                <Col md={12}> 
                   <h5>{post.title}</h5>
                <p>{post.topic}</p>
                <span>Read more</span>
                {/*<ul className='tag-list'>
                    {post.tags.map((tag, ind) => <li key={ind}>{tag}</li>)}
                </ul>*/}
                </Col>
            </Row>
                
            </Link>
        </Row>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}