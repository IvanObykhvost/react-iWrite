import { Link,Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../actions/auth';
import PropTypes from 'prop-types';

class Login extends React.Component {   
    constructor(props) {       
        super(props);   

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
        this.props.onSubmit(this.state);
    }    

    render() {                
        const currentUser = this.props.currentUser;
        const error = this.props.error;
        const inProgress = this.props.inProgress;

        if (currentUser) {
            return <Redirect to='/' />;
        }

        return (
            <div>
                <h1>Sign In</h1>
                <p>
                    <Link to="/register/">
                        Register
                    </Link>
                </p>
                {                   
                    error ?
                    <p>
                            {error}
                    </p>
                    : null
                }
                <form onSubmit={e => this.submit(e)}>
                    <input name="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)} /><br />
                    <input name="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)} /><br />               
                    <button type="submit"
                        disabled={inProgress}>                    
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ auth: { error, inProgress }, common: { currentUser } }) => ({
    error,
    currentUser,
    inProgress
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (state) =>
        dispatch(auth(state)),
});

Login.propTypes = {
    error: PropTypes.string,
    currentUser: PropTypes.object,
    inProgress: PropTypes.bool,
    onSubmit: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
