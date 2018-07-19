import React from 'react';
import { Redirect } from 'react-router-dom';
import Editor from './Editor/Editor';
import { STATUS } from './constant';
import api from "../../api";

export default class EditorContainer extends React.Component {
    constructor(props) {
        super(props);   
        
        this.initState = {
            status: STATUS.POST_INITIALIZE,
            post: {
                id: this.props.match.params.id,
                title: "",
                topic: "",
                message: "",
                tags: []
            },
            error: null
        };

        this.state = {
            ...this.initState,
            status: STATUS.POST_ADD
        };
    }

    componentDidMount(){
        this.onLoad();
    }    

    componentDidUpdate(prevProps, prevState) {
        if (prevState.post.id !== this.props.match.params.id) {
            
            let state = {...this.initState};
            state.post.id = this.props.match.params.id;
            this.setState(
                {...state}, 
                () => this.onLoad()
            );
        }        
    }

    onLoad = () => {
        if(this.state.post.id){
            this.setState({
                status: STATUS.POST_ON_LOAD
            });
            api.Posts.get(this.state.post.id)
                .then(
                    data => {
                        this.setState({ 
                            post: data.post ? data.post : this.state.post,
                            error: data.error ? data.error : null,
                            status: data.error ? STATUS.POST_ERROR : STATUS.POST_UPDATE
                        });
                    }   
                )
        }
    }

    change = e => {   
        const name = e.target.name;   
        let post = {...this.state.post};
        post[name] = e.target.value;
        this.setState({post});
    }

    changeTag = e => {
        let post = {...this.state.post};
        post.tags = e.map(tag => tag.value);
        this.setState({post});
    }

    submit = e => {
        e.preventDefault();      
        this.setState({
            status: STATUS.EDDITOR_IN_PROGREES
        });

        if(this.state.status === STATUS.POST_UPDATE){
            api.Posts.update(this.state.post)
                .then(
                    data => {
                        this.setState({
                            error: data.error ? data.error : null,
                            status: data.error ? STATUS.EDDITOR_ERROR : STATUS.EDITOR_SUCCESS
                        })
                    }
                )
        }
        else {
            let post = this.state.post;
            delete post.id;

            api.Posts.create(this.state.post)
                .then(
                    data => {
                        this.setState({
                            error: data.error ? data.error : null,
                            status: data.error ? STATUS.EDDITOR_ERROR : STATUS.EDITOR_SUCCESS
                        });
                    }
                ) 
        }
    }

    render() {
        let {post, status, error} = this.state;
        let renderError = null;
        if (status === STATUS.EDITOR_SUCCESS) {
            return <Redirect to='/' />;
        }

        if(status === STATUS.POST_ERROR){
            return <p className="error">{error}</p>;
        }
           
        if (status === STATUS.EDDITOR_ERROR) {
            renderError = <p className="error">{error}</p>;
        }

        return (
            status !== STATUS.POST_ON_LOAD 
            ?
            <Editor 
                onChange={e => this.change(e)} 
                onChangeTag={e => this.changeTag(e)}
                onSubmit={e => this.submit(e)} 
                error={renderError}
                post={post}
                inProgress={status === STATUS.EDDITOR_IN_PROGREES ? true : false}
            />
            :
            null
        )
    }
}
