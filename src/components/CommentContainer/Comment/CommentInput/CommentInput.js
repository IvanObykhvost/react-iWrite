import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardFooter } from 'reactstrap';
import Button from '../../../Form/Buttons/Button';
import Input from '../../../Form/Inputs/Input';

export default function CommentInput({text, inProgress, onChange, onSubmit}) {
    return (
        <Card>
            <form className="comment-form" onSubmit={onSubmit}>
                <Input 
                    type="textarea" 
                    name="comment" 
                    placeholder="Write a comment..." 
                    value={text} 
                    onChange={onChange} 
                />
                <CardFooter>
                    <Row>
                        <Col md={{size: 4, offset: 8}} className="text-right">
                            <Button
                                type={Button.type.submit}
                                name="Post comment"
                                disabled={inProgress}
                            />
                        </Col>
                    </Row>
                </CardFooter>
            </form>
        </Card>
    );
}

CommentInput.propTypes = {
    text: PropTypes.string.isRequired,
    inProgress: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
