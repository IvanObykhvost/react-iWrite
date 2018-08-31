import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonNav({ link, name, icon}) {
    return (
        <Link to={link}
            // className={`button-nav${icon ? ' icon' : ''}`}
        >
            <NavItem className='header-link'>
                { icon && <FontAwesomeIcon icon={icon}/> }
                {name}
            </NavItem>
        </Link>
 
    )
        }
        
ButtonNav.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string
}