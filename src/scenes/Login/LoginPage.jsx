import React, { Component } from 'react';
import Login from '../../components/Login/Login';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="auth-page">                
                <Login />
            </div>
        )
    }
}