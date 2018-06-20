import React, { Component } from 'react';
import Register from '../../components/Register/Register';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="auth-page">
                <Register />
            </div>
        )
    }
}