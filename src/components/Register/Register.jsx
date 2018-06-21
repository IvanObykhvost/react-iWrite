import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../actions/auth';
import PropTypes from 'prop-types';

class Register extends React.Component {
    constructor(props) {       
        super(props);

        this.state = {
            username: '',
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
                <h1>Sign Up</h1>
                <p>
                    <Link to="/login/">
                        Login
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
                    <input name="username" placeholder="Username" value={this.state.username} onChange={e => this.change(e)} /><br />
                    <input name="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)} /><br />
                    <input name="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)} /><br />
                    <button type="submit"
                        disabled={inProgress}>
                        Register
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

Register.propTypes = {
    error: PropTypes.string,
    currentUser: PropTypes.object,
    inProgress: PropTypes.bool,
    onSubmit: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
