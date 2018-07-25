import React from 'react';
import { Link } from 'react-router-dom';
import PopupContainer from '../../../PopupContainer/PopupContainer';
import LoginContainer from '../../../../scenes/LoginContainer/LoginContainer';
import Button from '../../../Form/Buttons/Button';

export default function SingInOrUp() {
    return (
        <div>
            <PopupContainer 
                // type="button"
                name="Sign in"
            >
            </PopupContainer>
            {/* <Link 
                to="/login"
            >
                Sign in
            </Link> */}

            &nbsp;or&nbsp;

            <Link 
                to="/register"
            >
                sign up
            </Link>
            
            &nbsp;to add comments on this article.
        </div>
    )
}