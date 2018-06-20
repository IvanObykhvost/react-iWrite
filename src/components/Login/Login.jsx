import { Link,Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
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
        
        const { currentUser } = this.props.common;
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
                    this.props.error ?
                    <p>
                            {this.props.auth.error}
                    </p>
                    : null
                }
                <form onSubmit={e => this.submit(e)}>
                    <input name="email" placeholder="Email" value={this.state.title} onChange={e => this.change(e)} /><br />
                    <input name="password" placeholder="Password" value={this.state.topic} onChange={e => this.change(e)} /><br />               
                    <button type="submit"
                        disabled={this.props.auth.inProgress}>                    
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, common }) => ({
    auth,
    common
});

const mapDispatchToProps = dispatch => ({
    onSubmit: ({ email, password }) =>
        dispatch(login(email, password)),
});

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    common: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
