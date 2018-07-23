import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';

export default function Register({state, onSubmit, onChange}) {
    return (
        <div className="login-page">
            <div className="container-page">
                <Row>
                    <Col md={10} className="offset-md-1">
                        <h1>Sign Up</h1>
                        {state.error}
                    </Col>
                </Row>
                <Row>
                    <Col md={2} className="offset-md-5 offset-sm-3" sm={6}>
                        <form onSubmit={onSubmit}>
                            <Input 
                                type="text"
                                name="username" 
                                placeholder="Username" 
                                value={state.username} 
                                onChange={onChange} 
                            />
                            <Input 
                                type="email"
                                name="email" 
                                placeholder="Email" 
                                value={state.email} 
                                onChange={onChange} 
                            />
                            <Input 
                                type="password"
                                name="password" 
                                placeholder="Password" 
                                value={state.password} 
                                onChange={onChange} 
                            />
                            <Button 
                                type="submit"
                                name="Register"
                                bsStyle="primary"
                                disabled={state.inProgress}
                            />
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

Register.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}