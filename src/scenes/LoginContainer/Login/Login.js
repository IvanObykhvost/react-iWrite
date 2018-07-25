import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import Label from '../../../components/Form/Label/Label';

export default function Login({state, onChange, onSubmit}) {   
    return (
        <div className="login-page">
            <Container>
                <Row>
                    <Col md={{size: 10, offset: 1}}>
                        {!state.isPopup && <h1>Sign In</h1>}
                        <Label className="error" message={state.error}/>
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
                            <Input 
                                type="email"
                                name="email" 
                                placeholder="Email" 
                                value={state.user.email} 
                                onChange={onChange} 
                            />
                            <Input 
                                type="password"
                                name="password" 
                                placeholder="Password" 
                                value={state.user.password} 
                                onChange={onChange} 
                                autoComplete="off"
                            />
                            <Button 
                                type="submit"
                                name="Login"
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

Login.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

