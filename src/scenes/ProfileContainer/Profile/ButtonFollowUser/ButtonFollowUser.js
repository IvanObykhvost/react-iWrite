import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Form/Buttons/Button';

export default function ButtonFollowUser({following, username, onClickFollow}) {
   
    if(following){
        return(
            <Button
                name={`Unfollow ${username}`}
                className="btn btn-sm action-btn btn-secondary"
                onClick={onClickFollow}
            />
        )
    }
    else {
        return(
            <Button
                name={`Follow ${username}`}
                className="btn btn-sm action-btn btn-outline-secondary"
                onClick={onClickFollow}
            />
        )
    }
}


ButtonFollowUser.propTypes = {
    following: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    onClickFollow: PropTypes.func.isRequired
}