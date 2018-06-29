import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    change = e => {        
        this.props.onChange([e.target.name], e.target.value);
    }

    submit = (e,post) => {
        e.preventDefault();       
        this.props.onSubmit(post);
    }

    componentWillMount(){
        this.props.onLoad();
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
                    <div>
                        <h1>{
                            postId ?
                                'Update post' :
                                'Add post'
                        }</h1>
                        <div>{
                            editorError ?
                                editorError :
                                null
                         }
                        </div>
                        <form onSubmit={e => this.submit(e,post)}>
                            <input name="title" placeholder="Title" value={post.title} onChange={e => this.change(e)} /><br />
                            <input name="topic" placeholder="Topic" value={post.topic} onChange={e => this.change(e)} /><br />
                            <input name="message" placeholder="Message" value={post.message} onChange={e => this.change(e)} /><br />
                            <input name="tags" placeholder="Tags" value={post.tags} onChange={e => this.change(e)} /><br />
                            <button type="submit"
                                disabled={editorInProgress}>
                                Publish Article
                        </button>
                        </form>
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
    onSubmit: PropTypes.func
}