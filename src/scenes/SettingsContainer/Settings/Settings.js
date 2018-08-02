import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Label, Form, FormGroup } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import Alert from '../../../components/Form/Alert/Alert';

export default function  Settings({state, onChange, onSubmit}) {
    return (
        <div className="setting-page">
            <Container>
                <Row>
                    <Col md={{size: 10, offset: 1}}>
                        <h1>Your settings</h1>
                    </Col>
                </Row> 
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <Alert message={state.error} color={Alert.color.danger}/>
                        <Alert message={state.success} color={Alert.color.success}/>

                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label for="image">Image url</Label>
                                <Input 
                                    id="image"
                                    type="text"
                                    name="image" 
                                    placeholder="Image Url" 
                                    value={state.user.image} 
                                    onChange={onChange} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Username</Label>
                                <Input 
                                    id="name"
                                    type="text"
                                    name="name" 
                                    placeholder="Username" 
                                    value={state.user.name} 
                                    onChange={onChange} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input 
                                    id="email"
                                    type="email"
                                    name="email" 
                                    placeholder="Email" 
                                    value={state.user.email} 
                                    onChange={onChange} 
                                    autoComplete="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bio">Biography</Label>
                                <Input 
                                    id="bio"
                                    type="text"
                                    name="bio" 
                                    placeholder="Biography" 
                                    value={state.user.bio} 
                                    onChange={onChange} 
                                />
                            </FormGroup>
                            <Button 
                                type="submit"
                                name="Update settings"
                                color="primary"
                                disabled={state.inProgress}
                            />
                        </Form>
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

