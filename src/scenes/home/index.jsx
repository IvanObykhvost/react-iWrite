import React, { Component } from 'react';
import Header from '../../components/Header/Header';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <Header />
                
            </div>
        )
    }
}