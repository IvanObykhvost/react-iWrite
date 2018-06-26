import { connect } from 'react-redux';
import Home from './Home';
import { postsGetAll, postsGetByUsername } from '../../actions/posts';
import { POSTS_REQUEST_TYPES } from '../../constant/constant';

const mapStateToProps = function(state){
    let tabList;
    //authorized
    if (state.common.currentUser) {
        tabList = [
            { id: 0, title: "Your Feed", active: true },
            { id: 1, title: "Global Feed", active: false },
        ] 
    }
    //unauthorized
    else {
        tabList = [           
            { id: 1, title: "Global Feed", active: true },
        ] 
    }

    return {
        posts: state.posts,
        tabList: tabList,
        tags: []
    };
}

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {     
        dispatch(doLoadAction());
    },
    onTabClick: (id) => {
        //Your feed
        if (id == 0) {
            dispatch(doTabAction())
        }
        //Global feed
        else {
            dispatch(postsGetAll());
        }
    }
    //onUnload: () => dispatch(profilePageUnload())
})

function doTabAction() {
    return (dispatch, getState) => {
        const state = getState();      

        dispatch(postsGetByUsername(state.common.currentUser.name, POSTS_REQUEST_TYPES.FOLLOW ));
    }
}

function doLoadAction() {
    return (dispatch, getState) => {
        const state = getState();

        //mean we are authorized 
        if (state.common.currentUser) {
            dispatch(postsGetByUsername(state.common.currentUser.name, POSTS_REQUEST_TYPES.FOLLOW));
        }

          //mean we are UNauthorized 
        else {
            dispatch(postsGetAll());
        }       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);