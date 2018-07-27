import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Media } from 'reactstrap';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ButtonIcon from "../../Form/Buttons/ButtonIcon";
import { CheckImage } from "../../../utils/Operations";

function Comment({comment, showDeleteButton, onClickDelete}) {
    return (
        <div className="card">
            <div className="card-block">
                <Row>
                    <Col md={12} className="text-left card-text">
                        <div className="display-linebreak text-align-justify">
                            {comment.text}
                        </div>
                    </Col>
                </Row>
                
            </div>
            <div className="card-footer">
                <Row>
                    <Col md={10} xs={10} className="text-left">
                        <Link
                            to={`/@${comment.author.name}`}
                            className="comment-author"
                        >
                            <Media object 
                                src={CheckImage(comment.author.image)} 
                                className="post-userImage" 
                                alt={comment.author.username}
                            />
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
                                icon={<DeleteIcon className="button-delete" onClick={onClickDelete}/>}
                            />
                            :                        
                            null
                    } 
                    </Col>
                </Row>
            </div>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    showDeleteButton: PropTypes.bool.isRequired,
    // inProgress: PropTypes.bool.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default Comment;