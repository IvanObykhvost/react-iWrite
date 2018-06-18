import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import HomePage from './scenes/Home/HomePage';
import PostNew from './containers/Post/PostNew';

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/PostNew" component={PostNew} />
        </Switch>
    </BrowserRouter>;
}