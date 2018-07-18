import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap';
import { postFavorite } from '../../actions/posts';
import { POSTS_REQUEST_TYPES, POST_FAVOURITING } from '../../constant/constant';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleButton from './Buttons/SimpleButton';

class Post extends React.Component {
//export function Post({ post, post: { author }}) {
    
    
    constructor(props) {
        super(props);
    }

    render() {
        const { post, post: { author } } = this.props;

        return (
            <div className='feed-post-preview'>
                <Row className="post-preview-header">
                    <Col xs={1} md={1} >
                        <Link to={`/@${author.name}`}>
                            <Image 
                                className="post-userImage" 
                                src="http://getdrawings.com/img/user-silhouette-icon-3.png" 
                                circle 
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
                    <Col md={1} className="pull-right post-like" onClick={() => this.props.onFavourite(post)}> 
                        <div style={{textAlign: 'center'}}>
                            <SimpleButton 
                                bsStyle="primary"
                                bsSize="small"
                                name={post.favouritesCount}
                            />
                        </div>
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
                                {post.tags.map((tag, index) => <li  key={index}>{tag}</li>)}
                            </ul>
                        </Col>
                    </Row>
            </div>
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