import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from '../../Router';
import Header from '../Header/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        currentUser: state.common.currentUser,
    }
};

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Header currentUser={this.props.currentUser} />
                    <Router />
                </div>
            </BrowserRouter>)
    }
}

export default connect(mapStateToProps, null)(App);