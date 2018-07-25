import React from 'react';
import PopupContainer from '../../../PopupContainer/PopupContainer';
import LoginContainer from '../../../../scenes/LoginContainer/LoginContainer';
import RegisterContainer from '../../../../scenes/RegisterContainer/RegisterContainer';

export default function SingInOrUp() {
    return (
        <div>
            <PopupContainer 
                name="Sign in"
            >
                <LoginContainer isPopup={true}/>
            </PopupContainer>

            &nbsp;or&nbsp;

            <PopupContainer 
                name="Sign up"
            >
                <RegisterContainer isPopup={true}/>
            </PopupContainer>

            &nbsp;to add comments on this article.
        </div>
    )
}