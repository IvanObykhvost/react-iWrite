import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Link, Redirect }  from 'react-router-dom';

export default class Article extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onLoad()
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        const { article: { post, postError, postDeleteInProgress, postDeleteError, postDeleteSuccess }, canModify } = this.props;

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

