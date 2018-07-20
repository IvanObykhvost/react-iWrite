import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../actions/auth';

import Login from "./Login/Login";
import api from '../../api';


export default class LoginConteiner extends React.Component {   
    constructor(props) {       
        super(props);   

        this.state = {
            user: {
                email: '',
                password: ''
            },
            error: null,
            inProgress: false,
            success: null
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

        api.Auth.login(this.state.user)
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
        else {
            return (
                <Login 
                    onChange={e => this.onChange(e)}
                    onSubmit={e => this.submit(e)}
                    state={state}
                />
            );
        }
    }
}

// const mapStateToProps = ({ auth: { error, inProgress }, common: { currentUser } }) => ({
//     error,
//     currentUser,
//     inProgress
// });

// const mapDispatchToProps = dispatch => ({
//     onSubmit: (state) =>
//         dispatch(auth(state)),
// });

// Login.propTypes = {
//     error: PropTypes.string,
//     currentUser: PropTypes.object,
//     inProgress: PropTypes.bool,
//     onSubmit: PropTypes.func
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
