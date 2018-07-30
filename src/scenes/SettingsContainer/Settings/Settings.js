import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import Label from '../../../components/Form/Label/Label';

export default function  Settings({state, onChange, onSubmit}) {
    return (
        <div className="setting-page">
            <Container>
                <Row>
                    <Col md={{size: 10, offset: 1}}>
                        <h1>Your settings</h1>
                        <Label className="error" message={state.error}/>
                        <Label className="success" message={state.success}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <form onSubmit={onSubmit}>
                            <Input 
                                type="text"
                                name="image" 
                                placeholder="Image Url" 
                                value={state.user.image} 
                                onChange={onChange} 
                            />
                            <Input 
                                type="text"
                                name="name" 
                                placeholder="Username" 
                                value={state.user.name} 
                                onChange={onChange} 
                            />
                            <Input 
                                type="email"
                                name="email" 
                                placeholder="Email" 
                                value={state.user.email} 
                                onChange={onChange} 
                                autoComplete="email"
                            />
                            <Input 
                                type="text"
                                name="bio" 
                                placeholder="Biography" 
                                value={state.user.bio} 
                                onChange={onChange} 
                            />
                            <Button 
                                type="submit"
                                name="Update settings"
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

Settings.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

