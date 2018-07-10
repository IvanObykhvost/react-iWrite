import React from "react";
import { Row, Col } from 'react-bootstrap';
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
        const { article: { post, postError, postDeleteInProgress, postDeleteError, postDeleteSuccess, comments, commentsError, commentCreateError, commentCreateInProgress, commentDeleteInProgress }, canModify, postId } = this.props;

        if (postDeleteSuccess) {
            return <Redirect to='/' />;
        }

        if (!post && !postError) {
            return <div>Please wait, post is loading...</div>
        }

        else if (postError) {
            return <div>{postError}</div>
        }

        else {
            const { author } = post;

            return (
                <div className="article-page">
                    <div className="banner">
                        <div className="container">
                            <h2>{post.title}</h2>
                            <div className="article-meta">
                                <Link to={`/@${author.name}`}>
                                    {/*<img src={author.image} alt={author.name} />*/}
                                </Link>
                                <div className="info">
                                    <Link to={`/@${author.name}`} className="author">
                                        {author.name}
                                    </Link>
                                    <span className="date">
                                        {new Date(post.createdAt).toDateString()}
                                    </span>

                                </div>   
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
                            </div>
                        </div>
                    </div>
                    <div className="container page">
                        <div className="row article-content">
                            <div className="col-xs-12">                               
                                <ul className="tag-list">
                                    {post.message}
                                    {/*
                                        this.props.article.tagList.map(tag => {
                                            return (
                                                <li
                                                    className="tag-default tag-pill tag-outline"
                                                    key={tag}>
                                                    {tag}
                                                </li>
                                            );
                                        })
                                    */}
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="article-actions">
                        </div>
                        <div className="row">
                            <CommentContainer
                                comments={comments}
                                commentsError={commentsError}
                                commentCreateInProgress={commentCreateInProgress}
                                commentCreateError={commentCreateError}
                                commentDeleteInProgress={commentDeleteInProgress}
                                postId={postId} />
                        </div>
                    </div>
                </div>
                /*{
                 < div className = "post-view" >
                    <div className='banner'>
                        <Col md={9} className='banner-container'>
                            <h2>{post.title}</h2>
                        </Col>
                    </div>
                    <div className='post-container'>
                        <Col md={9} className='message'>
                            {post.message}
                        </Col>
                    </div>
                </div >
                 }*/
            )
        }
    }
}

