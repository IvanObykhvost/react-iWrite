import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SimpleButton from '../common/Buttons/SimpleButton';
import Input from '../common/Inputs/Input';
import TagsInput from '../common/Inputs/TagsInput';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    change = e => {        
        this.props.onChange([e.target.name], e.target.value);
    }

    changeTag = e => {
        this.props.onChangeTags(e);
    }

    submit = (e,post) => {
        e.preventDefault();       
        this.props.onSubmit(post);
    }

    componentDidMount(){
        this.props.onLoad();
    }    

    componentDidUpdate(prevProps) {
        if (prevProps.postId !== this.props.postId) {
            this.props.onLoad();
        }        
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        const postId = this.props.postId;
        const { post, postError, editorInProgress, editorError, editorSuccess } = this.props.editor;       

        if (editorSuccess) {
            return <Redirect to='/' />;
        }

        if (!post && !postError) {
            return <div>Please wait, the post is loading...</div>
        }
        else {
            if (postError) {
                return <div>{postError}</div>
            }
            else {
                return (
                    <div className="editor-page">
                        <div className="container-page">
                        <Row>
                            <Col md={10} className="offset-md-1">
                                <h1>{
                                    postId ?
                                        'Update post' :
                                        'Add post'
                                }</h1>
                                {
                                    editorError ?
                                        <p className="error">
                                            {editorError}
                                        </p>
                                        : null
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} className="offset-md-4">
                                <form onSubmit={e => this.submit(e,post)}>
                                    <Input 
                                        type={"text"} 
                                        name="title" 
                                        placeholder="Title" 
                                        value={post.title} 
                                        onChange={e => this.change(e)} 
                                    />
                                    <Input 
                                        type={"text"} 
                                        name="topic" 
                                        placeholder="Topic" 
                                        value={post.topic} 
                                        onChange={e => this.change(e)} 
                                    />
                                    <Input 
                                        componentClass="textarea" 
                                        name="message" 
                                        placeholder="Message" 
                                        value={post.message} 
                                        onChange={e => this.change(e)} 
                                        rows={4}
                                    />
                                    <TagsInput 
                                        name="tags" 
                                        placeholder="Tags"
                                        onChange={e => this.changeTag(e)} 
                                        value={post.tags.map(tag => {return {value: tag, label: tag}})}
                                        noResultsText="Create new tags"
                                    />
                                    <SimpleButton 
                                        type="submit"
                                        name="Publish article"
                                        bsStyle="primary"
                                        disabled={editorInProgress}
                                    />
                                </form>
                            </Col>
                        </Row>
                        </div>
                    </div>);
            }
        }
    }
}

Editor.propTypes = {
    postId: PropTypes.string,
    editor: PropTypes.object,
    onLoad: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onUnload: PropTypes.func
}