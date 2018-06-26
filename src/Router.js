import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import HomePage from './scenes/Home/HomePage';
import EditorPage from './scenes/Editor/EditorPage';
import LoginPage from './scenes/Login/LoginPage';
import RegisterPage from './scenes/Register/RegisterPage';
import SettingsPage from './scenes/Settings/SettingsPage';
import ProfilePage from './scenes/Profile/ProfilePage';
import ErrorPage from './scenes/Error/ErrorPage';

export default function Router() {
    return (<Switch>
                <Route exact path="/" component={HomePage} />           
                <Route path="/editor/:id?" component={EditorPage}/> 
                <Route path="/login/" component={LoginPage} /> 
                <Route path="/register/" component={RegisterPage} /> 
                <Route path="/settings/" component={SettingsPage} /> 
                <Route path="/@:username/" component={ProfilePage} />
                <Route path="/error/" component={ErrorPage} />

            </Switch>
    )
    
}