import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { color, size } from "../../constants"; 

export default function ButtonFollow({color, size, name, outline, onClickFollow}) {
    return(
        <Button
            color={color}
            size={size}
            name={name}
            outline={outline}
            className='btn action-btn'
            onClick={onClickFollow}
        />
    )
}

ButtonFollow.color = color;
ButtonFollow.size = size;

ButtonFollow.propTypes = {
    name: PropTypes.string.isRequired,
    onClickFollow: PropTypes.func.isRequired,

    color: PropTypes.oneOf(Object.keys(color)),
    size: PropTypes.oneOf(Object.keys(size)),
    outline: PropTypes.bool
}