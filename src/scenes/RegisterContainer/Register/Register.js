import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import Alert from '../../../components/Form/Alert/Alert';

export default function Register({state, onSubmit, onChange}) {
    return (
        <Container className="register-page">
            <Row>
                <Col md={{size: 10, offset: 1}}>
                    {!state.isPopup && <h1>Sign Up</h1>}
                </Col>
            </Row>
            <Row>
                <Col 
                    md={{
                        size: state.isPopup ? 10 : 4, 
                        offset: state.isPopup ? 1 : 4
                    }}
                >
                    <form onSubmit={onSubmit}>
                        <Alert message={state.error} color={Alert.color.danger}/>
                        <Input 
                            type="text"
                            name="name" 
                            placeholder="Username" 
                            value={state.name} 
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
    );
}

Register.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}