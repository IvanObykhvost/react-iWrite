import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function ButtonDropDown({src, name, icon, caret, menuItems}) {
    return (    
        <UncontrolledDropdown nav inNavbar className='header-link'>
            <DropdownToggle nav caret={caret}>
                {src && <img src={src} alt={name}/>}
                {icon && <FontAwesomeIcon icon={icon} className='header-icon'/>}
                {name}
            </DropdownToggle>
            <DropdownMenu>
            {
                menuItems.map((button, index)=>
                <DropdownItem key={index}>
                    <Link to={button.link} >
                        <FontAwesomeIcon icon={button.icon} className='header-icon'/>
                        {button.name}
                    </Link>
                </DropdownItem>
                )
            }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

ButtonDropDown.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    caret: PropTypes.bool,
    menuItems: PropTypes.array.isRequired
}
        
