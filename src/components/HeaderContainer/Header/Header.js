import React from 'react';
import PropTypes from 'prop-types';
import ButtonNav from './ButtonNav/ButtonNav';
import ButtonDropDown from './ButtonDropDown/ButtonDropDown';
import pinIcon from '../../../../src/pinIcon.png'

export default function Header({buttons, pinned, pin}) {

    return (
        <aside className={`${pinned ? 'header-pinned' : 'header'}`} >
            <div className='header-nav' >
            {
                buttons.map((button, index) => {
                    if(button.menuItems.length > 0){
                        return <ButtonDropDown
                            key={index}
                            name={button.name}
                            menuItems={button.menuItems}
                            icon={button.icon}
                        />
                    }
                    else{
                        return <ButtonNav
                            key={index}
                            link={button.link}
                            name={button.name}
                            icon={button.icon}                            
                        />
                    }
                }
                )
                }
                <a className={`button-nav-pin ${pinned}`} onClick={pin} >
                    <img className="pin" src={pinIcon} alt={"pinIcon"}  /> 
                </a> 
            </div>
        </aside >
    )
}

Header.propTypes = {
    buttons: PropTypes.array.isRequired,
    pinned: PropTypes.string.isRequired,
    pin: PropTypes.func.isRequired
}