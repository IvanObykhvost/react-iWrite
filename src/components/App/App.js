import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from '../../Router';
import Header from '../Header/Header';

export default function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Router />
            </div>
        </BrowserRouter>
    )
}