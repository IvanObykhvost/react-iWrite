import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import HomePage from './scenes/Home/HomePage';
import EditorPage from './scenes/Editor/EditorPage';

export default function Router() {
    return (<Switch>
                <Route exact path="/" component={HomePage} />           
                <Route path="/editor/:id?" component={EditorPage}/> 
            </Switch>
    )
    
}