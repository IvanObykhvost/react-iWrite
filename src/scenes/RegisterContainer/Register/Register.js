import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import Label from '../../../components/Form/Label/Label';

export default function Register({state, onSubmit, onChange}) {
    return (
        <div className="login-page">
            <Container>
                <Row>
                    <Col md={{size: 10, offset: 1}}>
                        <h1>Sign Up</h1>
                        <Label className="error" message={state.error}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 4, offset: 4}} sm={{size: 6, offset: 3}}>
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
                                autoComplete="email"
                            />
                            <Input 
                                type="password"
                                name="password" 
                                placeholder="Password" 
                                value={state.password} 
                                onChange={onChange} 
                                autoComplete="new-password"
                            />
                            <Button 
                                type="submit"
                                name="Register"
                                color="primary"
                                disabled={state.inProgress}
                            />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

Register.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}