import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import InputComboBox from '../../../components/Form/Inputs/InputComboBox';


export default function Editor({post, onChange, onChangeTag, onSubmit, inProgress, error}){
    return (
        <div className="editor-page">
            <div className="container-page">
            <Row>
                <Col md={10} className="offset-md-1">
                    <h1>{
                        post.id ?
                            'Update post' :
                            'Add post'
                    }</h1>
                   {error}
                </Col>
            </Row>
            <Row>
                <Col md={4} className="offset-md-4">
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
                            componentClass="textarea" 
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
                            bsStyle="primary"
                            disabled={inProgress}
                        />
                    </form>
                </Col>
            </Row>
            </div>
        </div>
    );
}

Editor.propTypes = {
    postId: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}