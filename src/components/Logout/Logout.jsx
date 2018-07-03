import { Link,Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../actions/auth';
import PropTypes from 'prop-types';

export default class Logout extends React.Component {     
    constructor(props) {       
        super(props);   
    }  

    render() {         
        return <Redirect to='/' />;
    }
}

