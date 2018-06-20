import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import HomePage from './scenes/Home/HomePage';
import EditorPage from './scenes/Editor/EditorPage';
import PostPage from './scenes/Post/PostPage';
import LoginPage from './scenes/Login/LoginPage';
import RegisterPage from './scenes/Register/RegisterPage';

export default function Router() {
    return (<Switch>
                <Route exact path="/" component={HomePage} />           
                <Route path="/editor/:id?" component={EditorPage}/> 
                <Route path="/post/:id?" component={PostPage}/> 
                <Route path="/login/" component={LoginPage} /> 
                <Route path="/register/" component={RegisterPage} /> 
            </Switch>
    )
    
}