import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../data/user/action';

class LogoutConteiner extends React.Component {   
    constructor(props) {       
        super(props);   
        this.state = {
            logout: this.props.logout
        }
    }

    componentWillMount(){
        this.state.logout();     
    }

    render() {   
        return(
            <Redirect to='/'/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () =>
        dispatch(logout())
});

export default connect(null, mapDispatchToProps)(LogoutConteiner);