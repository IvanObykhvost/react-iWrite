import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, Col} from 'reactstrap';
import Input from './Input';

export default function InputCheckbox({ id, label, defaultChecked, ...props }) {
    return (
        <FormGroup className='input-checkbox'>
            <Label htmlFor={id} md={3}>{label}</Label>
            <Col className='switch-button'>
                <Input
                    type={Input.type.checkbox}
                    id={id}
                    defaultChecked={defaultChecked}
                    {...props}
                />
                <span>
                    <label htmlFor={id}></label>
                </span>
            </Col>
        </FormGroup>
        
    )
}

InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    defaultChecked: PropTypes.bool,
    props: PropTypes.object
}