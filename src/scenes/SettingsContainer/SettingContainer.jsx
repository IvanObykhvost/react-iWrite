import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../../api';
import Settings from './Settings/Settings';
import { setTokenInCookie } from "../../data/user/action";


class SettingsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {
                ...this.props.currentUser 
            },
            error: null,
            success: null,
            inProgress: false
        };
    }

    change = e => {
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    submit = e => {
        e.preventDefault();
        this.setState({
            inProgress: true
        });

        api.Auth.save(this.state.user)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    return this.props.setTokenInCookie(data);
                }
            )
            .then(
                response =>  {
                    let {data} = {...response};
                    if(data.error) return Promise.reject(data.error);
                    
                    this.setState({
                        inProgress: false,
                        error: data.error ? data.error : null,
                        success: data.success ? data.success : null
                    });
            })
            .catch(e => this.setState({
                error: e,
                inProgress: false,
                success: null
            }))
    }

    render() {
        
        let {state} = this;

        if(!state.user.token) {
            return <Redirect to='/' />;
        }
        else {
            return (
                <Settings 
                    onChange={e => this.change(e)}
                    onSubmit={e => this.submit(e)}
                    state={state}
                />
            )
        }
    }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser
});

const mapDispatchToProps = dispatch => ({
    setTokenInCookie: user =>
        dispatch(setTokenInCookie(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
