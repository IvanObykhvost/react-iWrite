import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, FormText, FormGroup, Label } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import InputComboBox from '../../../components/Form/Inputs/InputComboBox';
import Alert from '../../../components/Form/Alert/Alert';
// import RichTextEditorContainer from '../../../components/Form/Inputs/RichTextEditorContaner/RichTextEditorContaner';

export default function Editor({post, onChange, onChangeTag, onSubmit, inProgress, error }) {
    return (
        <div>
            <Container className="editor-page">
                <Row>
                    <Col md={{size: 10, offset: 1}}>
                        <div className='editor-page-header'>
                        {
                            post.id ?
                                'Update post' :
                                'Add post'
                        }
                        </div>
                        <Alert
                            message={error}
                            color={Alert.color.danger}
                        />
                        <form onSubmit={onSubmit}>
                            <FormGroup row>
                                <Label md={1} for='title'>
                                    Title
                                </Label>
                                <Col md={11}>
                                    <Input
                                        id='title'
                                        type={"text"}
                                        name="title"
                                        value={post.title}
                                        onChange={onChange}
                                    />
                                </Col>
                            </FormGroup>
                            {/* <RichTextEditorContainer   
                                value={post.message}
                                onChange={onChange}
                            /> */}
                            <FormGroup row>
                                <Label md={1} for='title'>
                                    Message
                                </Label>
                                <Col md={11}>
                                    <Input 
                                        type="textarea" 
                                        name="message" 
                                        value={post.message} 
                                        onChange={onChange} 
                                        rows={4}
                                    />
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Label md={1} for='tags'>
                                    Tags
                                </Label>
                                <Col md={11}>
                                    <InputComboBox
                                        id='tags'
                                        name="tags"
                                        onChange={onChangeTag}
                                        value={post.tags.map(tag => ({ value: tag, label: tag }))}
                                        noResultsText="Create new tags"
                                    />
                                        <FormText>
                                        You can specify up to 10 tags
                                    </FormText>
                                </Col>
                            </FormGroup>
                            
                            
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
    post: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onChangeTag: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired,
    error: PropTypes.string
}