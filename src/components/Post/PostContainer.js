import { connect } from 'react-redux';
import { postLoad } from '../../actions/post';
import Post from './Post';


const getPost = (posts, postId) => {
    let post = posts.find( post => post.id == postId);
    return post !== undefined ? post : null;
}

const mapStateToProps = (state, ownProps) => ({
    //post: getPost(state.posts, ownProps.postId), 
})


export default connect(
    mapStateToProps,
    (dispatch, props) => ({
        onLoad: (id) => {     
            dispatch(postLoad(id));
        }
    })
)(Post)
