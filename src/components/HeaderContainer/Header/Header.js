import React from 'react';
import PropTypes from 'prop-types';
import ButtonNav from './ButtonNav/ButtonNav';

export default function Header({buttons}) {

    return (
        <aside className='header' >
            {
                buttons.map((button, index) =>
                    <ButtonNav
                        key={index}
                        link={button.link}
                        name={button.name}
                        icon={button.icon}
                    />
                )
            }
        </aside >
    )
}

Header.propTypes = {
    buttons: PropTypes.array.isRequired
}