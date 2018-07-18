import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import SimpleButton from '../common/Buttons/SimpleButton';
import Input from '../common/Inputs/Input';

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
            <div className="login-page">
                <div className="container-page">
                    <Row>
                        <Col md={10} className="offset-md-1">
                            <h1>Sign Up</h1>
                            {                   
                                error ?
                                <p className="error">
                                    {error}
                                </p>
                                : null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} className="offset-md-5 offset-sm-3" sm={6}>
                            <form onSubmit={e => this.submit(e)}>
                                <Input 
                                    type="text"
                                    name="username" 
                                    placeholder="Username" 
                                    value={this.state.username} 
                                    onChange={e => this.change(e)} 
                                />
                                <Input 
                                    type="email"
                                    name="email" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={e => this.change(e)} 
                                />
                                <Input 
                                    type="password"
                                    name="password" 
                                    placeholder="Password" 
                                    value={this.state.password} 
                                    onChange={e => this.change(e)} 
                                />
                                <SimpleButton 
                                    type="submit"
                                    name="Register"
                                    bsStyle="primary"
                                    disabled={inProgress}
                                />
                            </form>
                        </Col>
                    </Row>
                </div>
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
