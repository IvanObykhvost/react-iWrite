import React, { Component } from 'react';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() { 
        return (
            <div className="col-md-3">
                <div className="sidebar">
                    <p>Popular tags</p>
                </div>
            </div>
        )
    }
}