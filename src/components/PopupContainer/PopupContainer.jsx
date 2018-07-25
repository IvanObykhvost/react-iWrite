import React from 'react';
import Popup from './Popup/Popup';
import Button from '../Form/Buttons/Button';
import CheckFalseOrTrue from '../../utils/CheckFalseOrTrue';


export default class PopupContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            element: this.getElement(this.props),
            name: this.props.name,
            isButtonClose: CheckFalseOrTrue(this.props.isButtonClose)
        };
    }

    getElement(props){
        if(props.type === "button"){
            return <Button 
                name={props.name} 
                color="primary"
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
        return(
            <div className="modal-link">
                {state.element}
                <Popup
                    isOpen={state.isOpen}
                    onClose={e => this.handelClose()}
                    title={state.name}
                    isButtonClose={state.isButtonClose}
                >
                    {this.props.children}
                </Popup>
            </div>
            
        );
    }
}