import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../../api';
import Settings from './Settings/Settings';


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
                    //change currrent user
                    this.setState({
                        inProgress: false,
                        error: data.error ? data.error : null,
                        success: data.success ? data.success : null
                    });
                }
            )
    }

    render() {
        
        let {state} = this;

        if(state.error){
            state.error = <p className="error">{state.error}</p>;
        }
        if(state.success){
            state.success = <p className="success">{state.success}</p>;
        }

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

const mapStateToProps = ({ common: { currentUser } }) => ({
    currentUser
});


export default connect(mapStateToProps, null)(SettingsContainer);
