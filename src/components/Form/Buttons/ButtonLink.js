import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ButtonLink({to, name, ...props}){
    return (
        <Link
            to={to}
        >
            <Button
                name={name}
                {...props}
            />
        </Link>
    );
}

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    props: PropTypes.object
}