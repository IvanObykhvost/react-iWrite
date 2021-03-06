import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile/Profile';
import api from '../../api';
import Label from '../../components/Form/Label/Label';
import Loader from '../../components/Loader/Loader';

class ProfileContainer extends React.Component {
    constructor(props){
        super(props);
        let username = this.props.match.params.username;

        this.state = {
            username,
            currentUser: this.props.currentUser,
            profile: null,
            error: null,
            inProgress: true,
            isUser: false,
            tabList: this.getTabList(username)
        }
    }

    componentDidMount() {
        this.onLoad(this.state.username);
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.username !== prevProps.match.params.username){
            this.onLoad(this.props.match.params.username);
        }
    }

    getTabList = username => {
        return [
            { 
                id: 0, 
                title: "My Articles", 
                active: true, 
                type: 'post',
                onLoad(page, limit){return api.Posts.byAuthor(username, page, limit);}
            },
            { 
                id: 1, 
                title: "Favorited Articles", 
                active: false, 
                type: 'post',
                onLoad(page, limit){return api.Posts.byFavorite(username, page, limit);}
            },
            {
                id: 2, 
                title: "Followers", 
                active: false, 
                type: 'user',
                onLoad(page, limit){return api.Profile.followers(username, page, limit);}
            },
            {
                id: 3, 
                title: "Following", 
                active: false, 
                type: 'user',
                onLoad(page, limit){return api.Profile.following(username, page, limit);}
            }
        ]
    }
    onLoad = username => {
        this.setState({
            inProgress: true
        });

        api.Profile.get(username)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    this.setState({
                        username,
                        tabList: this.getTabList(username),
                        profile: data.user,
                        inProgress: false
                    });
                }
            )
            .catch(e => this.setState({error: e}))
    }

    render() {
        let {state} = this;
        if(state.error)
            return <Label className="error" message={state.error}/>;

        return (
            !state.inProgress ? 
                <Profile 
                    profile={state.profile}
                    isUser={state.currentUser && state.profile ? state.currentUser.name === state.profile.name : false}
                    currentUser={state.currentUser}
                    onClickFollow={e => this.handelClickFollowUser()}
                    tabList={state.tabList}
                />
                :
                <Loader />
        )
        
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(
    mapStateToProps,
    null
)(ProfileContainer)
