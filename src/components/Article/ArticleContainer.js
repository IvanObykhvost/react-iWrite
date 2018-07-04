import { connect } from 'react-redux';
import { articlePost } from '../../actions/article';
import Article from './Article';

const mapStateToProps = (state, props) => ({
    post: state.article.post,
    postError: state.article.postError
})

const mapDispatchToProps = (dispatch, props) => ({
    onLoad: () => {
        dispatch(articlePost(props.postId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article)
