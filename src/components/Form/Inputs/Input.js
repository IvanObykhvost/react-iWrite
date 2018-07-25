import React from 'react';
import * as reactstrap from 'reactstrap';

export default function Input({ ...props }) {
    return (
        <reactstrap.Input 
            { ...props }
        />
    )
}