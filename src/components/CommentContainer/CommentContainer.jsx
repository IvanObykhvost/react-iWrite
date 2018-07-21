import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import api from '../../api';
import SingInOrUp from './Comment/SingInOrUp/SingInOrUp';
import CommentInput from './Comment/CommentInput/CommentInput';
import Comment from "./Comment/Comment";

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.currentUser,
            postId: this.props.postId,
            comments: [],
            error: null,
            inProgress: {
                create: false,
                delete: false,
                onLoad: true
            },
            text: ""
        }
    }

    componentDidMount(){
        api.Comments.forArticle(this.state.postId)
            .then(
                data => {
                    this.setState({
                        inProgress: {
                            ...this.state.inProgress,
                            onLoad: false
                        }
                    });

                    if(data.error) return Promise.reject(data.error);
                        
                    this.setState({
                        comments: data.comments
                    });
                }
            )
            .catch(e => this.setState({ error: e }))
    }

    change = e => {
        this.setState({ text: e.target.value });
    }; 

    submit = e => {
        e.preventDefault();
        this.setState({
            inProgress: {
                ...this.state.inProgress,
                create: true
            }
        });

        api.Comments.create(this.state.postId, this.state.text)
            .then(
                data => {
                    this.setState({
                        inProgress: {
                            ...this.state.inProgress,
                            create: false
                        }
                    });
                    if(data.error) return Promise.reject(data.error);

                    let {comments} = this.state;
                    comments.unshift(data.comment);
                    this.setState({
                        comments,
                        text: ""
                    });
                }
            )
            .catch(e => this.setState({error: e}))
    }

    handelClickDelete = commentId => {
        this.setState({
            inProgress: {
                ...this.state.inProgress,
                delete: true
            }
        });

        api.Comments.delete(this.state.postId, commentId)
            .then(
                data => {
                    this.setState({
                        inProgress: {
                            ...this.state.inProgress,
                            delete: false
                        }
                    });

                    if(data.error) return Promise.reject(data.error);

                    let {comments} = this.state;
                    comments = comments.filter(comment => comment.id !== data.comment.id)
                    this.setState({
                        comments
                    });
                }
            )
            .catch(e => this.setState({error: e}))

    }

    render() {
        let {state} = this;
        
        if(state.error) {
            state.error = <div className="error">{state.error}</div>;
        }
       
        return (
            <Row>
                <Col md={6} xs={12} className="offset-md-3">
                    {state.error}
                    {
                        state.user ?
                            <CommentInput
                                text={state.text}
                                postId={state.postId} 
                                inProgress={state.inProgress.create}
                                onChange={e => this.change(e)}
                                onSubmit={e => this.submit(e)}
                            />
                            :
                            <SingInOrUp/>
                    }
                    {
                        !state.inProgress.onLoad ?
                            state.comments.map(comment =>
                                <Comment 
                                    comment={comment}
                                    showDeleteButton={state.user ? comment.author.name === state.user.name : false}
                                    inProgress={state.inProgress.create}
                                    onClickDelete={e => this.handelClickDelete(comment.id)}
                                />
                            )
                            :
                            <div>Please wait, comments are loading...</div>
                    }
                </Col>
            </Row>
        )
        
    }    
}

const mapStateToProps = (state, props) => ({
    currentUser: state.common.currentUser
})

export default connect(mapStateToProps, null)(CommentContainer);
