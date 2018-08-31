import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonNav({ link, name, icon}) {
    return (
        <NavItem className='header-link'>
            <Link to={link}>
                { icon && <FontAwesomeIcon icon={icon}/> }
                {name}
            </Link>
        </NavItem>
        
 
    )
        }
        
ButtonNav.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string
}