import React from 'react';
import PropTypes from 'prop-types';
import ButtonNav from './ButtonNav/ButtonNav';
import pinIcon from '../../../../src/pinIcon.png'

export default function Header({buttons, pinned, pin}) {

    return (
        <aside className={`header ${pinned ? 'header-pinned' : 'header-unpinned'}`} >
            <div className='header-nav' >
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
                <a className={`button-nav-pin ${pinned ? 'pinned' : ''}`} onClick = { e => pin(e)} >
                    <img className="pin" src={pinIcon} alt={"pinIcon"}  /> 
                </a> 
            </div>
        </aside >
    )
}

Header.propTypes = {
    buttons: PropTypes.array.isRequired//,
    // currentUser: PropTypes.object,
    // onLogout: PropTypes.func.isRequired
}