import React from 'react';
import { Redirect } from 'react-router-dom';
import Editor from './Editor/Editor';
import { STATUS } from './constant';
import api from "../../api";
import Label from '../../components/Form/Label/Label';
//import RichTextEditor from 'react-rte';

export default class EditorContainer extends React.Component {
    constructor(props) {
        super(props);   
        
        this.initState = {
            status: STATUS.POST_ADD,
            post: {
                id: this.props.match.params.id,
                title: "",

                shortDescription: "",
                longDescription: "",
                disableComments: false,
                disableRatings: false,
                status: "incomplete",
                categories: [
                    {
                        id: 0,
                        name: "Adventure",
                        selected: false
                    },
                    {
                        id: 1,
                        name: "Alternate Universe",
                        selected: false
                    },
                    {
                        id: 2,
                        name: "Anthology",
                        selected: false
                    },
                    {
                        id: 3,
                        name: "Anthro",
                        selected: true
                    },
                    {
                        id: 4,
                        name: "Comedy",
                        selected: false
                    },
                    {
                        id: 5,
                        name: "Crossover",
                        selected: true
                    },
                    {
                        id: 6,
                        name: "Dark",
                        selected: false
                    },
                    {
                        id: 7,
                        name: "Drama",
                        selected: false
                    },
                    {
                        id: 8,
                        name: "Horror",
                        selected: false
                    },
                    {
                        id: 9,
                        name: "Human",
                        selected: false
                    },
                    {
                        id: 10,
                        name: "Mystery",
                        selected: false
                    },
                    {
                        id: 11,
                        name: "Porn",
                        selected: false
                    },
                    {
                        id: 12,
                        name: "Random",
                        selected: false
                    },
                    {
                        id: 13,
                        name: "Romance",
                        selected: false
                    },
                    {
                        id: 14,
                        name: "Sad",
                        selected: false
                    },
                    {
                        id: 15,
                        name: "Science Fiction",
                        selected: false
                    },
                    {
                        id: 16,
                        name: "Second Person",
                        selected: false
                    },
                    {
                        id: 17,
                        name: "Slice of Life",
                        selected: false
                    },
                    {
                        id: 18,
                        name: "Thriller",
                        selected: false
                    },
                    {
                        id: 19,
                        name: "Tragedy",
                        selected: false
                    },
                ],

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
        let post = { ...this.state.post };

        if (e.target.type == "checkbox") 
            post[name] = e.target.checked;
        else
            post[name] = e.target.value;

        this.setState({ post });     
        console.log(post);
    }

    changeLongDescription = longDescription => {
        let post = { ...this.state.post };
        post["longDescription"] = longDescription;
        this.setState({ post });
    }

    changeTag = e => {
        let post = {...this.state.post};
        post.tags = e.map(tag => tag.value);
        this.setState({post});
    }

    setCategories = id => {
        let post = { ...this.state.post };
        let category = post.categories.find(x => x.id === id);
        category.selected = !category.selected;
        this.setState({ post });        
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
                    onChangeLongDescription={longDescription => this.changeLongDescription(longDescription)} 
                    onChangeTag={e => this.changeTag(e)}
                    setCategories={ id => this.setCategories(id)}
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
