import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { postFavorite } from '../../actions/posts';
import { POSTS_REQUEST_TYPES, POST_FAVOURITING } from '../../constant/constant';

class Post extends React.Component {
//export function Post({ post, post: { author }}) {
    
    
    constructor(props) {
        super(props);
    }

    render() {
        const { post, post: { author } } = this.props;

        return (
            <Row className='feed-post-preview'>
                <Col md={10}>
                    <Link to={`/@${author.name}`}>
                        {author.name}
                    </Link>
                </Col>
                <Col md={10}>
                    {post.createdAt}
                </Col>
                <Col md={2} className="pull-right" onClick={() => this.props.onFavourite(post)}> 
                    Likes count: {post.favouritesCount}
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
}

const mapStateToProps = (state, props) => ({   
  //  return {
        post: props.post,        
    //};
})

const mapDispatchToProps = dispatch => ({

    //is used for BOTH: favourite, unfavourite
    //type(asynch mode can be : FAVOURITE OR UNFAVOURITE)

    onFavourite: (post) => {
        if (post.favorited) {
            dispatch(postFavorite(post, POST_FAVOURITING.UNFAVOURITE))
        }
        else {
            dispatch(postFavorite(post, POST_FAVOURITING.FAVOURITE))
        }
    }
});
        
        

Post.propTypes = {
    post: PropTypes.object.isRequired,
    onFavourite: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);