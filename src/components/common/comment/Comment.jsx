import { Link } from 'react-router-dom';
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ButtonIcon from "../Buttons/ButtonIcon";

const Comment = props => {
    const { postId, comment, commentDeleteInProgress } = props;   
    const showDeleteButton = props.currentUser &&
        props.currentUser.name === comment.author.name;

    return (
        <div className="card">
            <div className="card-block">
                <Row>
                    <Col md={12} className="text-left card-text">
                        <pre>{comment.text}</pre>
                    </Col>
                </Row>
                
            </div>
            <div className="card-footer">
                <Row className="">
                    <Col md={10} xs={10} className="text-left">
                        <Link
                            to={`/@${comment.author.name}`}
                            className="comment-author"
                        >
                            <Image src={comment.author.image} className="post-userImage" alt={comment.author.username}/>
                        </Link>
                        <Link
                            to={`/@${comment.author.name}`}                    
                            className="comment-author"
                        >
                            {comment.author.name}
                        </Link>
                        <span className="date-posted">
                            {new Date(comment.createdAt).toDateString()}
                        </span>
                    </Col>
                    <Col md={2} xs={2} className="text-right align-self-center">
                    {
                        showDeleteButton ?   
                            <ButtonIcon   
                                icon={<DeleteIcon className="button-delete" />}
                                onClick={() => props.onCommentDelete(postId, comment.id)}
                            />
                            // <SimpleButton
                            //     disabled={commentDeleteInProgress}
                            //     className="btn btn-sm btn-primary"
                            //     onClick={() =>  props.onCommentDelete(postId, comment.id)}
                            //     name='Delete Comment'/>
                            :                        
                            null
                    } 
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Comment;