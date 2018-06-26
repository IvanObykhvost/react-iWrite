import { connect } from 'react-redux';
import { profileLoad } from '../../actions/profile';
import { postsGetByUsername  } from '../../actions/posts';
import Profile from './Profile';
import { POSTS_REQUEST_TYPES } from '../../constant/constant';

const mapStateToProps = (state, props) => ({
    currentUser: state.common.currentUser,
    profile: state.profile,
    username: props.username,
    tabList: [
        { id: 0, title: "My Articles",  active: true},
        { id: 1, title: "Favorited Articles", active: false },
    ],
    posts: state.posts
})

const mapDispatchToProps = (dispatch, props)  => ({
    onLoad: () => {        
        dispatch(profileLoad({ username: props.username }));
        dispatch(postsGetByUsername(props.username, POSTS_REQUEST_TYPES.ALL));
    },
    onTabClick: (id) => {
        //My Articles
        if (id == 0) {
            dispatch(postsGetByUsername(props.username, POSTS_REQUEST_TYPES.ALL));
        }
        //Favourite Atricles
        else {
            dispatch(postsGetByUsername(props.username, POSTS_REQUEST_TYPES.FAVOURITE));
        }
    }
    //onUnload: () => dispatch(profilePageUnload())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
