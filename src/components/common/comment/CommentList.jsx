import Comment from './Comment';
import React from 'react';

const CommentList = props => {
    return (
            props.comments.map(comment => {
                return (
                    <Comment
                        postId={props.postId}
                        comment={comment}  
                        commentDeleteInProgress={props.commentDeleteInProgress}
                        currentUser={props.currentUser}
                        onCommentDelete={props.onCommentDelete}
                        key={comment.id} />
                );
            })
    );
};

export default CommentList;
