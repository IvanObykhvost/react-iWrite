import { Link } from 'react-router-dom';
//import ListErrors from './ListErrors';
import React from 'react';
import { connect } from 'react-redux';
/*import {
    LOGIN
} from '../constants/actionTypes';*/


class Login extends React.Component {
    constructor() {
        super();   
        this.state = {
            email: '',
            password: ''
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = e => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
    }
    

    render() {        
        return (
            <div>
                <h1>Sign In</h1>
                <p>
                    <Link to="/register">
                        Register
                    </Link>
                </p>
                <form onSubmit={e => this.submit(e)}>
                    <input name="email" placeholder="Title" value={this.state.title} onChange={e => this.change(e)} /><br />
                    <input name="password" placeholder="Topic" value={this.state.topic} onChange={e => this.change(e)} /><br />               
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(Login);
