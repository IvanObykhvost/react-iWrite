import React from 'react';
import PopupContainer from '../../PopupContainer/PopupContainer';

export default class LinkPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isOpen: false
        }
    }

    openModal(){
        this.state ={
            isOpen: true
        }
    }

    render() {
        const {state} = this;
        return (
            <div> 
                <link
                    onClick={e => this.openModal()}
                >
                    {this.props.contentLabel}
                </link>

                {
                    state.isOpen ?
                        <PopupContainer

                        />
                        :
                        null
                }
            </div>
            
        )
    }
}