import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./Login/Login";
import api from '../../api';
import { currentUser } from '../../data/user/action';
import { CheckFalseOrTrue } from '../../utils/Operations';

class LoginContainer extends React.Component {   
    constructor(props) {       
        super(props);   

        this.state = {
            user: {
                email: '',
                password: ''
            },
            error: null,
            inProgress: false,
            success: false,
            isPopup: CheckFalseOrTrue(this.props.isPopup)
        }
    }

    onChange = e => {
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    submit = e => {
        e.preventDefault(); 
        this.setState({
            inProgress: true
        });
        const user = this.state.user;

        api.Auth.login(user.email, user.password)
            .then(
                data => {
                    if(data.error)
                       return Promise.reject(data.error);

                    localStorage.setItem('jwt', data.user.token);
                    return this.props.CurrentUser();
                }
            )      
            .then(
                () => {
                    this.setState({
                        success: true,
                        inProgress: false
                    });
                }
            )
            .catch(e => this.setState({
                    error: e,
                    inProgress: false
            }));
    }    

    render() {                
        let {state} = this;

        if (state.success) {
            if(state.isPopup){
                return window.location.reload();
            }
            return <Redirect to='/' />;
        }

        return (
            <Login 
                onChange={e => this.onChange(e)}
                onSubmit={e => this.submit(e)}
                state={state}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    CurrentUser: () =>
        dispatch(currentUser())
});

export default connect(null, mapDispatchToProps)(LoginContainer);