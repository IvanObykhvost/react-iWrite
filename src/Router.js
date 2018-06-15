import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import HomePage from './scenes/home';
import App from './App';

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>;
}