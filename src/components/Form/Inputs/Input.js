import React from 'react';
import { FormControl } from 'react-bootstrap';

export default function Input({ ...props }) {
    return (
        <FormControl
            { ...props }
        />
    )
}