import React, { Component } from 'react';
import NavButton from './NavButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/nav';


class NavMenu extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <aside className='nav'>
                <NavButton
                    onClick={this.props.home}
                >Home</NavButton>
                <NavButton
                    onClick={this.props.newPost}
                >New post</NavButton>
            </aside>    
        )
    }
}

export default connect(
    null,
    dispatch => bindActionCreators(actions, dispatch)
)(NavMenu)