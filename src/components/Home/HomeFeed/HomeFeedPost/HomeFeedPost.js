import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

export default function HomeFeedPost({ post }) {
    return (
        <div className='feed-post-preview'>
            <a href='#'>
                <h5>{post.title}</h5>
                <p>{post.topic}</p>
                    <span>Read more</span>
                <ul className='tag-list'>
                    {post.tags.map((tag, ind) => <li key={ind}>{tag}</li>)}
                </ul>
            </a>
        </div>    
    )
}

HomeFeedPost.propTypes = {
    post: PropTypes.object.isRequired
}