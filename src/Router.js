import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import HomePage from './scenes/Home/index';
import PostNew from './containers/Post/PostNew';
import App from './App';

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/PostNew" component={PostNew} />
        </Switch>
    </BrowserRouter>;
}