import { connect } from 'react-redux';
import { profileLoad } from '../../actions/profile';
import { postsLoad  } from '../../actions/posts';
import Profile from './Profile';


/*const getPost = (posts, postId) => {
    if (typeof postId == "undefined") {
        return {
            id: posts.length + 1,
            title: '',
            topic: '',
            message: '',
            tags: ''
        }
    } else {
        return posts.find(post => post.id == postId)
    }
}*/

const mapStateToProps = (state, props) => ({
    currentUser: state.common.currentUser,
    profile: state.profile,
    username: props.username,
    tabList: [
        { id: 0, title: "My Articles",  active: true},
        { id: 1, title: "Favorited Articles", active: false },
    ]
})

const mapDispatchToProps = (dispatch, props)  => ({
    onLoad: () => {        
        dispatch(profileLoad({ username: props.username }));
        //dispatch(postsLoad({ username: props.username }));
    },
    onTabClick: (id) => {
        //My Articles
        if (id == 0) {
            dispatch(postsLoad({ username: props.username }));
        }
        else {
            dispatch(postsLoad({ username: props.username }));
        }
    }
    //onUnload: () => dispatch(profilePageUnload())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
