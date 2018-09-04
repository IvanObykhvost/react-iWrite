import React from 'react';
import PropTypes from 'prop-types';
import ButtonNav from './ButtonNav/ButtonNav';
import ButtonDropDown from './ButtonDropDown/ButtonDropDown';
import { Navbar, Nav, NavItem, Container} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header({buttons, pinned, pin}) {

    let result = (button, index) => {
        if(button.menuItems){
            return <ButtonDropDown
                    key={index}
                    name={button.name}
                    src={button.src}
                    menuItems={button.menuItems}
                    icon={button.icon}
                    caret={button.caret}
                />
        }
        else {
            return <ButtonNav 
                    key={index}
                    name={button.name}
                    link={button.link}
                    icon={button.icon}
                />
        }
    }

    return (
        <header className={`${pinned ? 'header-pinned' : 'header'}`} >
            <Container>
                <Navbar>
                    <Nav className='header-main'> 
                        {
                            buttons.main.map(result)
                        }
                    </Nav>
                    <Nav className='float-lg-right'>
                        <NavItem className='header-tools'>
                            {
                                buttons.tools.map((button, index) => 
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={button.icon}
                                    />)
                            }
                            <FontAwesomeIcon 
                                icon='thumbtack' 
                                className={`button-nav-pin ${pinned}`}
                                onClick={pin}
                            />
                        </NavItem>
                        {
                            buttons.user.map(result)
                        }
                    </Nav>
                </Navbar>
            </Container>
        </header>
    )
}

Header.propTypes = {
    buttons: PropTypes.object,
    pinned: PropTypes.string.isRequired,
    pin: PropTypes.func.isRequired
}