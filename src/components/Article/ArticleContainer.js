import { connect } from 'react-redux';
import { articlePost, articlePostDelete, articleComments, articleUnload } from '../../actions/article';
import Article from './Article';

const mapStateToProps = (state, props) => ({
    //post: state.article.post,
    //postError: state.article.postError
    postId: props.postId,
    article: state.article,
    canModify: state.common.currentUser && state.article.post && state.common.currentUser.name == state.article.post.author.name ? true : false
})

const mapDispatchToProps = (dispatch, props) => ({
    onLoad: () => {
        dispatch(articlePost(props.postId));
        dispatch(articleComments(props.postId));
    },
    onUnload: () => {
        dispatch(articleUnload());
    },
    onPostDelete: (post) => {
        dispatch(articlePostDelete(post));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Article)
