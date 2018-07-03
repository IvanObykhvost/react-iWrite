import React, { Component } from 'react';
//import Editor from '../../components/Editor/Editor';
import EditorContainer from '../../components/Editor/EditorContainer';

export default class EditorPage extends Component {
    constructor(props) {
        super(props);            
    }

    render() {
        return (
            <div className="postNew">
                <EditorContainer postId = { this.props.match.params.id }/>               
            </div>
        )
    }
}