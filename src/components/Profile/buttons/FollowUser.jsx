import React from 'react';
import PropTypes from 'prop-types';

export default class FollowUser extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {        
        const { currentUser, user } = this.props;    
        let classes = "btn btn-sm action-btn";

        user.following ?
            classes += " btn-secondary" :
            classes += ' btn-outline-secondary'

        return (
                <button
                    className={classes}
                    onClick={() => this.props.onFollowUser(currentUser, user) }
                >

                    <i className="ion-plus-round"></i>
                    &nbsp;
                    {
                        user.following ? 'Unfollow' : 'Follow'
                    } &nbsp;
                    {user.name}
                </button>
            );
    }   
}


FollowUser.propTypes = {
    currentUser: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onFollowUser: PropTypes.func.isRequired
}