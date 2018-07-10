import React from 'react';
//import agent from '../../agent';
//import { connect } from 'react-redux';
//import { ADD_COMMENT } from '../../constants/actionTypes';

export default class CommentInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        };               
    }

    setBody = e => {
        this.setState({ body: e.target.value });
    }; 

    createComment = e => {
            e.preventDefault();
            const { postId } = this.props;           
            this.setState({ body: '' });
            this.props.onSubmit( postId, this.state.body);
    };

    render() {
        return (
            <form className="card comment-form" onSubmit={(e) => { this.createComment(e) }}>
                <div className="card-block">
                    <textarea
                        className="form-control"
                        placeholder="Write a comment..."
                        value={this.state.body}
                        onChange={(e) => { this.setBody(e) }}
                        rows="3">
                    </textarea>
                </div>
                <div className="card-footer">
                    {/*<img
                        src={this.props.currentUser.image}
                        className="comment-author-img"
                        alt={this.props.currentUser.username} />*/}
                    <button
                        disabled={this.props.commentCreateInProgress}
                        className="btn btn-sm btn-primary"
                        type="submit">
                        Post Comment
                    </button>
                </div>
            </form>
        );
    }
}


