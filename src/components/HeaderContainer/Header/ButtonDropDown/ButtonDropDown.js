import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class ButtonDropDown extends React.Component {
    constructor(props) {
        super(props);        

        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => this.setState({dropdownOpen: !this.state.dropdownOpen})      
    
    render(){
        const {name, menuItems} = this.props;

        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="drop-down-button-nav">
                <DropdownToggle color="primary">
                    {name}
                </DropdownToggle>
                <DropdownMenu >
                {
                    menuItems.map((item, index) =>
                        <DropdownItem key={index}><Link to={item.link}>{item.name}</Link></DropdownItem>
                    )
                }
                </DropdownMenu>
          </ButtonDropdown>
        )
    }
}
        
