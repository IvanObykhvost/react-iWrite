import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Post from './Post';
import PropTypes from 'prop-types';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);       
    }
   
    render() {        
        const posts = this.props.posts.posts;
        const error = this.props.posts.error;

        if (!posts && !error) {
            return (
                <div>
                    <p>Please wait, the posts are laoding...</p>
                </div>);
        }
        else if (error) {
            return (
                <div>
                    <p>{error}</p>
                </div>);
        }
        else {
            if (posts.length == 0) {
                return (
                    <div>
                        <p>Sorry, no posts found.</p>
                    </div>);
            }
            else {
                const postList = posts.map(post => {                  
                    return <Post key={post.id} post={post}/>
                })              

                return (
                    <div>                       
                            {postList}                       
                    </div>
                );
            }
        }  
    }
}

PostList.propTypes = {
    posts: PropTypes.object.isRequired
}