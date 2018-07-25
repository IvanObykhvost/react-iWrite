import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import InputComboBox from '../../../components/Form/Inputs/InputComboBox';
import Label from '../../../components/Form/Label/Label';

export default function Editor({post, onChange, onChangeTag, onSubmit, inProgress, error}){
    return (
        <div className="editor-page">
            <Container>
                <Row>
                    <Col md={{size: 10, offset: 1}}>
                        <h1>{
                            post.id ?
                                'Update post' :
                                'Add post'
                        }</h1>
                    <Label className="error" message={error}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <form onSubmit={onSubmit}>
                            <Input 
                                type={"text"} 
                                name="title" 
                                placeholder="Title" 
                                value={post.title} 
                                onChange={onChange} 
                            />
                            <Input
                                type={"text"} 
                                name="topic" 
                                placeholder="Topic" 
                                value={post.topic} 
                                onChange={onChange} 
                            />
                            <Input 
                                type="textarea" 
                                name="message" 
                                placeholder="Message" 
                                value={post.message} 
                                onChange={onChange} 
                                rows={4}
                            />
                            <InputComboBox 
                                name="tags" 
                                placeholder="Tags"
                                onChange={onChangeTag} 
                                value={post.tags.map(tag => ({value: tag, label: tag}))}
                                noResultsText="Create new tags"
                            />
                            <Button 
                                type="submit"
                                name="Publish article"
                                color="primary"
                                disabled={inProgress}
                            />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

Editor.propTypes = {
    postId: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}