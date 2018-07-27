import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Register from "./Register/Register";
import api from '../../api';
import { currentUser } from '../../data/user/action';
import { CheckFalseOrTrue } from '../../utils/Operations';


class RegisterContainer extends React.Component {   
    constructor(props) {       
        super(props);   

        this.state = {
            currentUser: this.props.currentUser,
            user: {
                name: '',
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
        let {user} = this.state;
        api.Auth.register(user.name, user.email, user.password)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

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
                    inProgress: false,
                    success: false
            }));
    }    

    render() {                
        let {state} = this;

        if (state.currentUser || state.success) {
            if(state.isPopup)
                return window.location.reload();

            return <Redirect to='/' />;
        }

        return (
            <Register 
                onChange={e => this.onChange(e)}
                onSubmit={e => this.submit(e)}
                state={state}
            />
        );
    }
}

const mapStateToProps = ({user: { currentUser } }) => ({
    currentUser
});

const mapDispatchToProps = dispatch => ({
    CurrentUser: () =>
        dispatch(currentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);