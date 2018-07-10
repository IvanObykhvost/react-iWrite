﻿import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { articleComments, articleCommentCreate, articleCommentDelete } from '../../../actions/article';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.onLoad();
    }

    render() {
        const { comments, commentsError, commentCreateError, commentCreateInProgress, commentDeleteInProgress, currentUser, postId } = this.props;

        if (!comments && !commentsError) {
            return <div>Please wait, comments are loading...</div>;
        }

        else {
            if (commentsError) {
                return <div>{commentsError}</div>;
            }
            else {
                if (!currentUser) {
                    return (<div className="col-xs-12 col-md-8 offset-md-2">
                        <p>
                            <Link to="/login">Sign in</Link>
                            &nbsp;or&nbsp;
                            <Link to="/register">sign up</Link>
                                            &nbsp;to add comments on this article.
                        </p>
                        <CommentList postId={postId} comments={comments} currentUser={currentUser} commentDeleteInProgress={commentDeleteInProgress} onCommentDelete={this.props.onCommentDelete}/>
                    </div>)
                }
                else {
                    return (
                        <div className="col-xs-12 col-md-8 offset-md-2">
                            <div>
                                <div>{commentCreateError}</div>
                                <CommentInput postId={postId} //currentUser={currentUser}
                                    commentCreateInProgress={commentCreateInProgress} onSubmit={this.props.onSubmit} />
                            </div>
                            <CommentList postId={postId} comments={comments} currentUser={currentUser} commentDeleteInProgress={commentDeleteInProgress} onCommentDelete={this.props.onCommentDelete}/>
                        </div>)
                }
            }
        }      
    }    
}

const mapStateToProps = (state, props) => ({
    postId: props.postId,
    comments: props.comments,
    commentsError: props.commentsError,
    commentCreateInProgress: props.commentCreateInProgress,
    commentCreateError: props.commentCreateError,
    commentDeleteInProgress: props.commentDeleteInProgress,
    currentUser: state.common.currentUser
})

const mapDispatchToProps = (dispatch, props) => ({
    onLoad: () => {
        dispatch(articleComments(props.postId));
    },
    onSubmit: (postId, commentText) => {
        dispatch(articleCommentCreate(postId, commentText));
    },
    onCommentDelete: (postId, commentId) => {
        dispatch(articleCommentDelete(postId, commentId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);