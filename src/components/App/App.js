import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from '../../Router';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { appLoad } from '../../actions/app';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import HeaderContainer from '../HeaderContainer/HeaderContainer';

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        // this.props.onLoad(token ?  token : null);
    }


    render() {        
        if (this.props.inProgress === true) {
            return <div>Приложение загружается, подождите пожалуйста</div>;                                
        }
        else {
            return (
                <BrowserRouter>
                    <div className='App'>                               
                        <HeaderContainer currentUser={this.props.currentUser}/>
                        <Router />
                    </div>
                </BrowserRouter>)
        }
    }
}

// const mapStateToProps = ({ common: { currentUser, inProgress }}) => {
//     return {
//         currentUser,
//         inProgress
//     }
// };

const mapStateToProps = ({ user : { currentUser} }) => ({
    currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: (token) =>
        dispatch(appLoad(token)),
    onLogout: () => {
        window.localStorage.removeItem('jwt')
        dispatch(logout());
    }
});

App.propTypes = {
    currentUser: PropTypes.object,   
    inProgress: PropTypes.bool.isRequired,   
    onLoad: PropTypes.func.isRequired,   
    onLogout: PropTypes.func.isRequired,   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);