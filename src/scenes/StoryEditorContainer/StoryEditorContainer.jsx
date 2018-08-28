import React from 'react';
import { Redirect } from 'react-router-dom';
import StoryEditor from './StoryEditor/StoryEditor';
import { STATUS, ERROR } from './constant';
import api from "../../api";
import Label from '../../components/Form/Label/Label';

export default class StoryEditorContainer extends React.Component {
    constructor(props) {
        super(props);   
        
        this.initState = {
            status: STATUS.STORY_ADD,
            story: {
                id: this.props.match.params.id,
                title: "",
                shortDescription: "",
                longDescription: "",
                disableComments: false,
                disableRatings: false,
                status: "incomplete",
                categories: [],
            },
            inProgress: true,
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
            state.story.id = this.props.match.params.id;
            this.setState(
                {...state}, 
                () => this.onLoad()
            );
        }
    }

    onLoad = () => {
        //load categories
        this.setState({           
            inProgress: true
        });
        api.Categories.getAll()
            .then(
                data => {
                    let story = {...this.state.story};
                    story.categories =  data.categories ? data.categories : [];

                    this.setState({ 
                        inProgress: false,
                        story,
                        error: data.error ? data.error : null
                    });                    
                }   
            )
            .then(() =>{
                    if(this.state.story.id){
                        this.setState({
                            status: STATUS.STORY_UPDATE,
                            inProgress: true
                        });
                        api.Stories.get(this.state.story.id)
                            .then(
                                data => {
                                    let allCategories = this.state.story.categories.slice();
                                    let selectedCategories = data.story.categories.slice();

                                    selectedCategories.forEach(selectedCategory => {
                                        for(let i=0; i< allCategories.length; i++){
                                            if(allCategories[i].id === selectedCategory.id){
                                                allCategories[i].selected = true;
                                                break;
                                            }
                                        }
                                    });
                                    
                                    data.story.categories = allCategories.slice();

                                    this.setState({ 
                                        inProgress: false,
                                        story: data.story ? data.story : null,
                                        error: data.error ? data.error : null
                                    });
                                }   
                            )
                    }
                }
            );
    }

    change = e => {           
        const name = e.target.name;   
        let story = { ...this.state.story };

        if (e.target.type == "checkbox") 
            story[name] = e.target.checked;
        else
            story[name] = e.target.value;

        this.setState({ story });             
    }

    changeLongDescription = longDescription => {
        let story = { ...this.state.story };
        story["longDescription"] = longDescription;
        this.setState({ story });
    }

    changeTag = e => {
        let story = {...this.state.story};
        story.tags = e.map(tag => tag.value);
        this.setState({story});
    }

    setCategories = id => {
        let story = { ...this.state.story };
        let category = story.categories.find(x => x.id === id);
        category.selected = !category.selected;
        this.setState({ story });        
    }

    submit = e => {
        e.preventDefault();      
        //front validation
        //1 categories, at least one should be sleected
        //this.state.story.categories = this.state.story.categories.filter(category => category.selected);
        let selectedCategories = this.state.story.categories.filter(category => category.selected);

        //a few categories were selected
        if(selectedCategories.length > 0){
            this.setState({
                inProgress: true
            });

            let story = this.state.story;
            let request = null;
            //prepare categoies for back end
            //story.categories = story.categories.map(category => {return {"_id": category.id}});   

            if(this.state.status === STATUS.STORY_ADD){
                delete story.id;
                request = api.Stories.create(story);
            }
            else {
                request = api.Stories.update(story);
            }

            request
                .then(
                    data => {
                        this.setState({
                            inProgress: false,
                            error: data.error ? data.error : null,
                            success: data.success ? data.success : null
                        })
                    }
                )
        }
        //no categories were selected
        else{
            this.setState({
                error: ERROR.CATEGORY
            })
        }
    }

    render() {
        let {state, state: {story}} = this;


        if (state.status === STATUS.STORY_ADD && state.success) {
            return <Redirect to='/' />;
        }
        if (state.status === STATUS.STORY_UPDATE && state.success) {
            //return <Redirect to={`/article/${story.id}`} />;
            return <Redirect to='/' />;
        }

        if(!story && state.error){
            return <Label className="error" message={state.error}/>;
        }

        return (
            !state.inProgress ?
                <StoryEditor 
                    onChange={e => this.change(e)}
                    onChangeLongDescription={longDescription => this.changeLongDescription(longDescription)} 
                    onChangeTag={e => this.changeTag(e)}
                    setCategories={ id => this.setCategories(id)}
                    onSubmit={e => this.submit(e)} 
                    error={state.error}
                    story={story}
                    inProgress={state.inProgress}
                />
                :
                null
        )
    }
}
