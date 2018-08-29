import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class ButtonDropDown extends React.Component {
    constructor(props) {
        super(props);        

        this.state = {
            dropdownOpen: false,
            link: null
        }
    }

    toggle = () => {}      
    handelMouseEnter = () =>  this.setState({dropdownOpen: true})
    handelMouseLeave= () =>  this.setState({dropdownOpen: false})

    render(){
        const {name, menuItems, icon} = this.props;

        return (
            <ButtonDropdown 
                isOpen={this.state.dropdownOpen} 
                toggle={this.toggle} 
                className="drop-down-button-nav"
                onMouseEnter={() => this.handelMouseEnter()}
                onMouseLeave={() => this.handelMouseLeave()}
            >
                <DropdownToggle color="primary">
                {/* {  icon ?
                    <MuiThemeProvider>
                        {icon}
                    </MuiThemeProvider>
                    : 
                    null
                } */}
                    {name}
                </DropdownToggle>
                <DropdownMenu >
                {
                    menuItems.map((item, index) =>
                        <DropdownItem key={index} onClick={() => this.handelMouseLeave()}>
                            <Link to={item.link}>
                                {item.name}
                            </Link>
                        </DropdownItem>
                    )
                }
                </DropdownMenu>
          </ButtonDropdown>
        )
    }
}
        
