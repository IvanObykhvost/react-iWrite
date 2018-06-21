import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { settings } from '../../actions/settings';
import PropTypes from 'prop-types';

class Settings extends React.Component {
    constructor(props) {
        //super(error, currentUser, inProgress, onSubmit);   
        super(props);
        this.state = { ...this.props.currentUser };
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const { error, success, inProgress, currentUser } = this.props;

        return (
            <div>
                <h1>Your settings</h1>               
                {
                    error ?
                        <p style={{ 'color': 'red' }}>
                            {error}
                        </p>
                        : null
                }
                {
                    success ?
                        <p style={{ 'color': 'green' }}>
                            {success}
                        </p>
                        : null
                }
                <form onSubmit={e => this.submit(e)}>
                    <input name="image" placeholder="Image Url" value={this.state.image} onChange={e => this.change(e)} /><br />
                    <input name="name" placeholder="Username" value={this.state.name} onChange={e => this.change(e)} /><br />
                    <input name="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)} /><br />
                    <input name="bio" placeholder="Biography " value={this.state.bio} onChange={e => this.change(e)} /><br />
                    <input name="password" placeholder="New password" value={this.state.password} onChange={e => this.change(e)} /><br />
                    <button type="submit"
                        disabled={inProgress}>
                        Update Settings
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ settings: { error, success, inProgress }, common: { currentUser } }) => ({
    error,
    success,
    inProgress,
    currentUser
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (state) =>
        dispatch(settings(state)),
});

Settings.propTypes = {
    error: PropTypes.string,
    success: PropTypes.string,
    currentUser: PropTypes.object,
    inProgress: PropTypes.bool,
    onSubmit: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
