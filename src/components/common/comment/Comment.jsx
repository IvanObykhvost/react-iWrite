import { Link } from 'react-router-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const Comment = props => {
    const { postId, comment, commentDeleteInProgress } = props;   
    const showDeleteButton = props.currentUser &&
        props.currentUser.name === comment.author.name;

    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{comment.body}</p>
            </div>
            <div className="card-footer">
                <Link
                    to={`/@${comment.author.name}`}
                    className="comment-author">
                    {/*<img src={comment.author.image} className="comment-author-img" alt={comment.author.username} />*/}
                </Link>
                &nbsp;
                <Link
                    to={`/@${comment.author.name}`}                    
                    className="comment-author">
                    {comment.author.name}
                </Link>
                <span className="date-posted">
                    {new Date(comment.createdAt).toDateString()}
                </span>
                {
                    showDeleteButton ?       
                        <button
                            disabled={commentDeleteInProgress}
                            className="btn btn-sm btn-primary"
                            onClick={() =>  props.onCommentDelete(postId, comment.id)}>
                            Delete Comment
                        </button>:                        
                        null
                }              
            </div>
        </div>
    );
};

export default Comment;