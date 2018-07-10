import Comment from './Comment';
import React from 'react';

const CommentList = props => {
    return (
        <div>
            {
                props.comments.map(comment => {
                    return (
                        <Comment
                            comment={comment}  
                            commentDeleteInProgress={props.commentDeleteInProgress}
                            currentUser={props.currentUser}
                            onCommentDelete={props.onCommentDelete}
                            key={comment.id} />
                    );
                })
            }
        </div>
    );
};

export default CommentList;
