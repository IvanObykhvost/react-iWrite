import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from "./scenes/HomeContainer/HomeContainer";
import EditorContainer from './scenes/EditorContainer/EditorContainer';
import ArticleContainer from './scenes/ArticleContainer/ArticleContainer';
import LoginContainer from "./scenes/LoginContainer/LoginContainer";
import RegisterContainer from './scenes/RegisterContainer/RegisterContainer';
import SettingContainer from './scenes/SettingsContainer/SettingContainer';
import ProfileContainer from './scenes/ProfileContainer/ProfileContainer';
import LogoutContainer from './scenes/LogoutContainer/LogoutContainer';
import StoryEditorContainer from './scenes/StoryEditorContainer/StoryEditorContainer';
import StoriesContainer from './scenes/Manage/StoriesContainer/StoriesContainer';
import ManagePostsContainer from './scenes/Manage/ManagePostsContainer/ManagePostsContainer';

export default function Router() {
    return (<Switch>
                <Route exact path="/" component={HomeContainer} />      
                <Route path="/editor/:id?" component={EditorContainer} /> 
                <Route path="/editor" component={EditorContainer} />               
                <Route path="/article/:id?" component={ArticleContainer}/> 
                <Route path="/login/" component={LoginContainer} /> 
                <Route path="/register/" component={RegisterContainer} /> 
                <Route path="/settings/" component={SettingContainer} /> 
                <Route path="/@:username/" component={ProfileContainer} />               
                <Route path="/logout/" component={LogoutContainer} />
                <Route path="/storyEditor/:id?" component={StoryEditorContainer} />
                <Route path="/storyEditor/" component={StoryEditorContainer} />

                <Route path="/manage/stories" component={StoriesContainer} />
                <Route path="/manage/posts" component={ManagePostsContainer} />
            </Switch>
    )
    
}