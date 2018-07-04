import { connect } from 'react-redux';
import { profileLoad, followUser } from '../../actions/profile';
import { postsGetByUsername  } from '../../actions/posts';
import Profile from './Profile';
import { POSTS_REQUEST_TYPES, FOLLOW_USER } from '../../constant/constant';


const mapStateToProps = (state, props) => ({
    currentUser: state.common.currentUser,
    profile: state.profile,
    username: props.username,
    tabList: [
        { id: 0, title: "My Articles",  active: true},
        { id: 1, title: "Favorited Articles", active: false },
    ],
    posts: state.posts,
    //if curent user = profile user
    isUser: state.common.currentUser && state.profile.profile && state.common.currentUser.name == state.profile.profile.name ?
        true :
        false
})

const mapDispatchToProps = (dispatch, props)  => ({
    onLoad: () => {        
        dispatch(profileLoad(props.username));
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
    },
    //onUnload: () => dispatch(profilePageUnload())
    onFollowUser: (currentUser, user) => {       
        //trying to unfollow
        if (user.following) {
            dispatch(followUser(currentUser.token, user, FOLLOW_USER.UNFOLLOW));
        }
        //trying to follow
        else {
            dispatch(followUser(currentUser.token, user, FOLLOW_USER.FOLLOW));
        }
    },    
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
