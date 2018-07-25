import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Button from '../../../Form/Buttons/Button';
import Input from '../../../Form/Inputs/Input';

export default function CommentInput({text, inProgress, onChange, onSubmit}) {
    return (
        <form className="card comment-form" onSubmit={onSubmit}>
            <Input 
                componentClass="textarea" 
                name="comment" 
                placeholder="Write a comment..." 
                value={text} 
                onChange={onChange} 
            />
            <div className="card-footer">
                <Row>
                    {/* <Col md={4} className="text-left">
                        <Image src={currentUser.image} className="post-userImage"/>
                    </Col> */}
                    <Col md={4} className="offset-md-8 text-right">
                        <Button
                            type="submit"
                            name="Post comment"
                            color="primary"
                            disabled={inProgress}
                        />
                    </Col>
                </Row>
            </div>
        </form>
    );
}

CommentInput.propTypes = {
    text: PropTypes.string.isRequired,
    inProgress: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
