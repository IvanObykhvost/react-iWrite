import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './scenes/Home/HomePage';
import EditorContainer from './scenes/EditorContainer/EditorContainer';
import ArticleContainer from './scenes/ArticleContainer/ArticleContainer';
import LoginPage from './scenes/Login/LoginPage';
import RegisterPage from './scenes/Register/RegisterPage';
import SettingContainer from './scenes/SetingsContainer/SettingContainer';
import ProfileContainer from './scenes/ProfileContainer/ProfileContainer';
import ErrorPage from './scenes/Error/ErrorPage';

export default function Router() {
    return (<Switch>
                <Route exact path="/" component={HomePage} />      
                <Route path="/editor/:id?" component={EditorContainer} /> 
                <Route path="/editor" component={EditorContainer} />               
                <Route path="/article/:id?" component={ArticleContainer}/> 
                <Route path="/login/" component={LoginPage} /> 
                <Route path="/register/" component={RegisterPage} /> 
                <Route path="/settings/" component={SettingContainer} /> 
                <Route path="/@:username/" component={ProfileContainer} />               
                <Route path="/error/" component={ErrorPage} />
            </Switch>
    )
    
}