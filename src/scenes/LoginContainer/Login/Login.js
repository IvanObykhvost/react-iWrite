import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container} from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import Alert from '../../../components/Form/Alert/Alert';

export default function Login({state, onChange, onSubmit}) {   
    return (
        <Container className="login-page">
            <Row>
                <Col md={{size: 10, offset: 1}}>
                    {!state.isPopup && <h1>Sign In</h1>}
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
                            type={Button.type.submit}
                            name="Login"
                            color={Button.color.primary}
                            disabled={state.inProgress}
                        />
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

Login.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

