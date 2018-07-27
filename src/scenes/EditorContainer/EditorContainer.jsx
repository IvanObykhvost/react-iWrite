import React from 'react';
import { Redirect } from 'react-router-dom';
import Editor from './Editor/Editor';
import { STATUS } from './constant';
import api from "../../api";
import Label from '../../components/Form/Label/Label';

export default class EditorContainer extends React.Component {
    constructor(props) {
        super(props);   
        
        this.initState = {
            status: STATUS.POST_ADD,
            post: {
                id: this.props.match.params.id,
                title: "",
                topic: "",
                message: "",
                tags: []
            },
            inProgress: false,
            error: null,
            success: null
        };

        this.state = {
            ...this.initState
        };
    }

    componentDidMount(){
        this.onLoad();
    }    

    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id){
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
                status: STATUS.POST_UPDATE,
                inProgress: true
            });
            api.Posts.get(this.state.post.id)
                .then(
                    data => {
                        this.setState({ 
                            inProgress: false,
                            post: data.post ? data.post : null,
                            error: data.error ? data.error : null
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
            inProgress: true
        });

        let post = this.state.post;
        let request = null;

        if(this.state.status === STATUS.POST_ADD){
            delete post.id;
            request = api.Posts.create(post);
        }
        else {
            request = api.Posts.update(post);
        }

        request
            .then(
                data => {
                    this.setState({
                        inProgress: false,
                        error: data.error ? data.error : null,
                        success: data.success? data.success : null
                    })
                }
            )
    }

    render() {
        let {state, state: {post}} = this;


        if (state.status === STATUS.POST_ADD && state.success) {
            return <Redirect to='/' />;
        }
        if (state.status === STATUS.POST_UPDATE && state.success) {
            return <Redirect to={`/article/${post.id}`} />;
        }

        if(!post && state.error){
            return <Label className="error" message={state.error}/>;
        }

        return (
            !state.inProgress ?
                <Editor 
                    onChange={e => this.change(e)} 
                    onChangeTag={e => this.changeTag(e)}
                    onSubmit={e => this.submit(e)} 
                    error={state.error}
                    post={post}
                    inProgress={state.inProgress}
                />
                :
                null
        )
    }
}
