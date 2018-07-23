import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderContainer from '../../../components/HeaderContainer/HeaderContainer';
import Router from '../../../Router';


export default function App({currentUser}){
    return (
        <BrowserRouter>
            <div className='App'>                               
                <HeaderContainer currentUser={currentUser}/>
                <Router />
            </div>
        </BrowserRouter>)
}

App.propTypes = {
    currentUser: PropTypes.object
}