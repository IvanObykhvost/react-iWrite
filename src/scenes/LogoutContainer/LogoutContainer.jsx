import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout/Logout';
import { logout } from '../../actions/auth';

class LogoutConteiner extends React.Component {   
    constructor(props) {       
        super(props);   
    }

    render() {   
        this.props.logout();        
        return(
            <Logout/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () =>
        dispatch(logout())
});

export default connect(null, mapDispatchToProps)(LogoutConteiner);