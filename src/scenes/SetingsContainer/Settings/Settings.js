import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';

export default function  Settings({state, onChange, onSubmit}) {
    return (
        <div className="setting-page">
            <div className="container-page">
                <Row>
                    <Col md={10} className="offset-md-1">
                        <h1>Your settings</h1>
                        {state.error}
                        {state.success}
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="offset-md-4">   
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

Settings.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

