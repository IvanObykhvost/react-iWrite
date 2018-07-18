import React from 'react';
import { Button  } from 'react-bootstrap';

export default function SimpleButton({ name, ...props }) {
    return (
        <Button { ...props }>
            {name}
        </Button>
    )
}
