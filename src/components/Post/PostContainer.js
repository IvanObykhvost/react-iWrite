import { connect } from 'react-redux';
import { postAdd, postUpdate } from '../../actions/editor';
import Post from './Post';


const getPost = (posts, postId) => {
    let post = posts.find( post => post.id == postId);
    return post !== undefined ? post : null;
}

const mapStateToProps = (state, ownProps) => ({
    post: getPost(state.posts, ownProps.postId), 
})


export default connect(
    mapStateToProps,
    null
)(Post)
