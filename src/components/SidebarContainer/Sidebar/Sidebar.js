import React from 'react';
import PropTypes from 'prop-types';

export default function  Sidebar({tags, onClick}) {
    return (
        <div className="sidebar">
            <h6>Popular tags</h6>
            <ul className='tag-list'>
                {
                    tags.map((tag, index) => <li key={index} onClick={e => onClick(tag)}>{tag}</li>)
                }
            </ul>
        </div>
    )
}

Sidebar.propTypes = {
    tags: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}