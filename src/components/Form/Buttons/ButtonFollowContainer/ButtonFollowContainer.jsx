import React from 'react';
import { connect } from 'react-redux';
import api from '../../../../api';
import ButtonFollow from './ButtonFollow/ButtonFollow';


class ButtonFollowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        following: this.props.following,
        username: this.props.username,
        currentUser: this.props.currentUser,
    }
  }

    componentDidUpdate(prevProps){
        if(this.props.username !== prevProps.username){
            this.setState({
                following: this.props.following,
                username: this.props.username
            })
        }
    }

    handelClickFollow = () => {
        let request = null;
        let {following, username} = this.state;

        if(following){
            request = api.Profile.unfollow(username);
        }
        else {
            request = api.Profile.follow(username);
        }

        following = !following;

        request
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    this.setState({following});
                }
            )
            .catch(e => this.setState({error: e}))
    } 

    render() {
        let {state} = this;
        let name = `${state.following ? 'Unfollow': 'Follow'}`;
        const isUser = state.currentUser ? state.currentUser.name === state.username : false;
        return(
            state.currentUser &&
                !isUser &&
                    <ButtonFollow
                        name={name}
                        color={ButtonFollow.color.secondary}
                        outline={!state.following}
                        size={ButtonFollow.size.sm}
                        onClickFollow={() => this.handelClickFollow()}
                    />
        )

    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(
    mapStateToProps,
    null
)(ButtonFollowContainer);