import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout/Logout';
import { logout } from '../../data/user/action';


class LogoutConteiner extends React.Component {   
    constructor(props) {       
        super(props);   
    }

    componentWillMount(){
        this.props.logout();     
    }

    render() {   
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