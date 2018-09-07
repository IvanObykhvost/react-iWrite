import React from 'react';
import Popup from './Popup/Popup';
import Button from '../Form/Buttons/Button';
import { CheckFalseOrTrue } from '../../utils/Operations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const type ={
    button: 'button',
    link: 'link',
    icon: 'icon'
}

export default class PopupContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            element: this.getElement(this.props),
            name: this.props.name,
            isButtonClose: CheckFalseOrTrue(this.props.isButtonClose),
            buttons: this.props.buttons
        };
    }

    getElement(props){
        if(props.type === type.button){
            return <Button 
                name={props.name} 
                color="primary"
                onClick={e => this.handelOpen(e)}
            />
        }
        if(props.type === type.icon){
            return <FontAwesomeIcon
                icon={props.icon}
                onClick={e => this.handelOpen(e)}
            />
        }

        return (
            <div 
                className="a"
                onClick={e => this.handelOpen(e)}
            >
                {props.name} 
            </div>
        )
    }

    handelOpen(){
        this.setState({isOpen: true});
    }

    handelClose() {
        this.setState({isOpen: false});
    }

    render() {
        let {state} = this;
        const isButtonClose = state.buttons ? true : state.isButtonClose;
        return(
            <div className="modal-link">
                {state.element}
                <Popup
                    isOpen={state.isOpen}
                    onClose={e => this.handelClose()}
                    title={state.name}
                    isButtonClose={isButtonClose}
                    buttons={state.buttons}
                >
                    {this.props.children}
                </Popup>
            </div>
            
        );
    }
}

PopupContainer.type = type;
