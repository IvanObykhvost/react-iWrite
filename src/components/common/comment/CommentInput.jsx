import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Input from '../Inputs/Input';
import SimpleButton from "../Buttons/SimpleButton";

export default class CommentInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        };               
    }

    change = e => {
        this.setState({ body: e.target.value });
    }; 

    createComment = e => {
            e.preventDefault();
            const { postId } = this.props;           
            this.setState({ body: '' });
            this.props.onSubmit( postId, this.state.body);
    };

    render() {
        const {commentCreateInProgress} = this.props;
        return (
            <form className="card comment-form" onSubmit={(e) => { this.createComment(e) }}>
                <Input 
                    componentClass="textarea" 
                    name="comment" 
                    placeholder="Write a comment..." 
                    value={this.state.body} 
                    onChange={e => this.change(e)} 
                />
                <div className="card-footer">
                    <Row>
                        {/* <Col md={4} className="text-left">
                            <Image src={currentUser.image} className="post-userImage"/>
                        </Col> */}
                        <Col md={4} className="offset-md-8 text-right">
                            <SimpleButton
                                type="submit"
                                name="Post comment"
                                bsStyle="primary"
                                disabled={commentCreateInProgress}
                            />
                        </Col>
                    </Row>
                </div>
            </form>
        );
    }
}


