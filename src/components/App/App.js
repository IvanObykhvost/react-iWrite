import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from '../../Router';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { appLoad } from '../../actions/app';
import PropTypes from 'prop-types';
class App extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        this.props.onLoad(token ?  token : null);
    }

    render() {
        if (this.props.inProgress == true) {
            return <div>Приложение загружается, подождите пожалуйста</div>;                                
        }
        else {
            return (
                <BrowserRouter>
                    <div className='App'>                               
                        <Header currentUser={this.props.currentUser} />
                        <Router />
                    </div>
                </BrowserRouter>)
        }
    }
}

const mapStateToProps = ({ common: { currentUser, inProgress }}) => {
    return {
        currentUser,
        inProgress
    }
};

const mapDispatchToProps = dispatch => ({
    onLoad: (token) =>
         dispatch(appLoad(token)),
});

App.propTypes = {
    currentUser: PropTypes.object,   
    inProgress: PropTypes.bool.isRequired,   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);