import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './scenes/Home/HomePage';
import EditorContainer from './scenes/EditorContainer/EditorContainer';
import ArticlePage from './scenes/Article/ArticlePage';
import LoginPage from './scenes/Login/LoginPage';
import RegisterPage from './scenes/Register/RegisterPage';
import SettingsPage from './scenes/Settings/SettingsPage';
import ProfilePage from './scenes/Profile/ProfilePage';
import ErrorPage from './scenes/Error/ErrorPage';

export default function Router() {
    return (<Switch>
                <Route exact path="/" component={HomePage} />      
                <Route path="/editor/:id?" component={EditorContainer} /> 
                <Route path="/editor" component={EditorContainer} />               
                <Route path="/article/:id?" component={ArticlePage}/> 
                <Route path="/login/" component={LoginPage} /> 
                <Route path="/register/" component={RegisterPage} /> 
                <Route path="/settings/" component={SettingsPage} /> 
                <Route path="/@:username/" component={ProfilePage} />               
                <Route path="/error/" component={ErrorPage} />
            </Switch>
    )
    
}