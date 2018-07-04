import { connect } from 'react-redux';
import { articleLoad } from '../../actions/article';
import Post from './Post';


const getPost = (posts, postId) => {
    let post = posts.find( post => post.id == postId);
    return post !== undefined ? post : null;
}

const mapStateToProps = (state, ownProps) => ({
    //post: getPost(state.posts, ownProps.postId), 
    post: state.article.post
})


export default connect(
    mapStateToProps,
    (dispatch, props) => ({
        onLoad: () => {     
            dispatch(articleLoad(props.postId));
        }
    })
)(Post)
