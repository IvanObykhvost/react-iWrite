import React from 'react';
import { Redirect } from 'react-router-dom';
import Register from "./Register/Register";
import api from '../../api';


export default class LoginConteiner extends React.Component {   
    constructor(props) {       
        super(props);   

        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            },
            error: null,
            inProgress: false
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

        api.Auth.register(this.state.user)
            .then(
                data => {
                    //check error and put current user
                    this.setState({
                        error: data.error ? data.error : null,
                        success: data.success ? data.success : null,
                        inProgress: false
                    });
                }
            )      
    }    

    render() {                
        let {state} = this;

        if(state.error){
            state.error = <p className="error">{state.error}</p>;
        }

        if (state.success) {
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
