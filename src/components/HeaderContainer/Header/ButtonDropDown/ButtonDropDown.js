import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function ButtonDropDown({src, name, menuItems}) {
    return (    
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {src && <img src={src}/>}
                {name}
            </DropdownToggle>
            <DropdownMenu>
            {
                menuItems.map((button, index)=>
                <Link to={button.link} key={index}>
                    <DropdownItem>
                        <FontAwesomeIcon icon={button.icon} className='header-icon'/>
                        {button.name}
                    </DropdownItem>
                </Link>
                )
            }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

ButtonDropDown.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired
}
        
