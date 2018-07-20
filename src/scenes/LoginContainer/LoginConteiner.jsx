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
            inProgress: false
        }
    }

    onChange = e => {
        this.setState({
            user: {
                [e.target.name]: e.target.value
            }
        });
    }

    submit = e => {
        e.preventDefault(); 
        this.setState({
            inProgress: true
        });

        api.Auth.login(this.state.user)
            .then(
                data => {
                    this.setState({
                        error: data.error ? data.error : null,
                        inProgress: false
                    });
                }
            )      
    }    

    render() {                
        const currentUser = this.props.currentUser;
        const error = this.props.error;
        const inProgress = this.props.inProgress;

        if (currentUser) {
            return <Redirect to='/' />;
        }

        return (
            <Login 
                onChange={e => this.onChange(e)}
                
            />
        );
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
