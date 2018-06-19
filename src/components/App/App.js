import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from '../../Router';
import Header from '../Header/Header';
import { connect } from 'react-redux';


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Router />
            </div>
        </BrowserRouter>
    )
}

export default connect(

)(App);