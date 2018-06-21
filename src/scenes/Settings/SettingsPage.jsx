import React, { Component } from 'react';
import Settings from '../../components/Settings/Settings';

export default class SettingsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="auth-page">
                <Settings />
            </div>
        )
    }
}