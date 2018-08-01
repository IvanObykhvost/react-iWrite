import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ButtonIcon from './ButtonIcon';

export default class ButtonDropdownContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render() {
        let {children} = this.props;
        return (
            <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={e => this.toggle()} >
                <DropdownToggle color='secondary' outline caret />
                    
                <DropdownMenu right>
                {
                    children.map((item, index) =>
                        <DropdownItem key={index}>{item}</DropdownItem>
                    )
                }
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

ButtonDropdownContainer.propTypes = {
    name: PropTypes.string,
    children: PropTypes.object
}