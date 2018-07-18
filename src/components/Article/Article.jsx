import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import CommentContainer from '../common/comment/CommentContainer' 

export default class Article extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        const { article: { postData: { post, postError, postDeleteInProgress, postDeleteError, postDeleteSuccess } }, canModify, postId } = this.props;
         const { article: { commentsData }} = this.props;

        if (postDeleteSuccess) {
            return <Redirect to='/' />;
        }

        if (!post && !postError) {
            return <div>Please wait, post is loading...</div>
        }

        else if (postError) {
            return <div className="error">{postError}</div>
        }

        else {
            const { author } = post;

            return (
                <div className="article-page">
                    <div className="article-header">
                        {/* <Row> className="container"> */}
                        <Row>
                            <Col md={8} className="offset-md-2">
                                <h2>{post.title}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8} className="article-meta offset-md-2">
                                <Row className="align-items-center">
                                    <Col md={1} className="images">
                                        <Link to={`/@${author.name}`}>
                                            <Image src={author.image} alt={author.name} thumbnail/>
                                        </Link>
                                    </Col>
                                    <Col md={2} className="author">
                                        <Link to={`/@${author.name}`} >
                                            {author.name}
                                        </Link>
                                        <span className="date">
                                            {new Date(post.createdAt).toDateString()}
                                        </span>
                                    </Col>
                                    <Col md={9} className="buttons">
                                    {
                                        canModify ?                                              
                                            <span>                                           
                                                <Link                                       
                                                    to={`/editor/${post.id}`}
                                                    className="btn btn-outline-secondary btn-sm">
                                                    <i className="ion-edit"></i> Edit Article
                                                </Link>                                           
                                                <button
                                                    disabled={postDeleteInProgress}
                                                    className="btn btn-outline-danger btn-sm" onClick={() => this.props.onPostDelete(post)}>
                                                    <i className="ion-trash-a"></i> Delete Article
                                                </button>
                                            </span> :
                                            null
                                    }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className="container-page">
                        <Row className="article-content">
                            <Col md={8} className="offset-md-2">
                                <pre>
                                    {post.message}
                                </pre>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8} className="offset-md-2">
                                <CommentContainer commentsData={commentsData} postId={postId}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }
    }
}

