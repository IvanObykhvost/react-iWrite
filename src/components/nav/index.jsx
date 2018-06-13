import React, { Component } from 'react';
import NavButton from './nav-button';

export default class NavMenu extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <aside className='nav'>
                <NavButton>Home</NavButton>
                <NavButton>New post</NavButton>
            </aside>    
        )
    }
}