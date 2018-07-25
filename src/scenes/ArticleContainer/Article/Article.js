import React from "react";
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from "../../../components/Form/Buttons/Button";
import CommentContainer from "../../../components/CommentContainer/CommentContainer";
import ButtonLink from "../../../components/Form/Buttons/ButtonLink";

export default function Article({ article, onClickDelete }) {
    const { post, post: { author }} = article;

    return (
        <div className="article-page">
            <Container>
                <div className="article-header">
                    <Row>
                        <Col md={{size: 8, offset: 2}}>
                            <h2>{post.title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size: 8, offset: 2}} className="article-meta">
                            <Row className="align-items-center">
                                <Col md={1} className="images">
                                    <Link to={`/@${author.name}`}>
                                        {/* <Image src={author.image} alt={author.name} thumbnail/> */}
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
                                    article.isOwner ?                                              
                                        <span>      
                                            <ButtonLink
                                                to={`/editor/${post.id}`}
                                                type="button"
                                                name="Edit Article"
                                                bsClass="btn btn-outline-secondary btn-sm"
                                            />
                                            <Button 
                                                name="Delete Article"
                                                type="button"
                                                bsClass="btn btn-outline-danger btn-sm"
                                                onClick={onClickDelete}
                                                // disabled={article.inProgress}
                                            />
                                        </span> :
                                        null
                                }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Row className="article-content">
                    <Col md={{size: 8, offset: 2}}>
                        <pre>
                            {post.message}
                        </pre>
                        <hr />
                    </Col>
                </Row>
                <CommentContainer 
                    postId={post.id}
                />
            </Container>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.object.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

