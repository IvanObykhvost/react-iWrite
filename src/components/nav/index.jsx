import React, { Component } from 'react';
import NavButton from './nav-button';

//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import actions from '../../actions/export';

export default class NavMenu extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        let { navAction } = this.props;
        return (
            <aside className='nav'>
                <NavButton
                    onClick={event => navAction.home()}
                >Home</NavButton>
                <NavButton
                    onClick={event => navAction.newPost()}
                >New post</NavButton>
            </aside>    
        )
    }
}

//export default connect(
//    null,
//    dispatch => bindActionCreators(actions, dispatch)
//)(NavMenu)