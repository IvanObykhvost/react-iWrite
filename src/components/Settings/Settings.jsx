import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { settings } from '../../actions/settings';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import SimpleButton from '../common/Buttons/SimpleButton';
import Input from '../common/Inputs/Input';

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
        const disabled = inProgress ? 'disabled' : null;
        if (!currentUser) {
            return <Redirect to='/' />;
        }
        else {
            return (
                <div className="setting-page">
                    <div className="container-page">
                    <Row>
                        <Col md={10} className="offset-md-1">
                            <h1>Your settings</h1>
                            {
                                error ?
                                    <p className="error">
                                        {error}
                                    </p>
                                    : null
                            }
                            {
                                success ?
                                    <p className="success">
                                        {success}
                                    </p>
                                    : null
                            }
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={4} className="offset-md-4">   
                            <form onSubmit={e => this.submit(e)}>
                                <Input 
                                    type="text"
                                    name="image" 
                                    placeholder="Image Url" 
                                    value={this.state.image} 
                                    onChange={e => this.change(e)} 
                                />
                                <Input 
                                    type="text"
                                    name="name" 
                                    placeholder="Username" 
                                    value={this.state.name} 
                                    onChange={e => this.change(e)} 
                                />
                                <Input 
                                    type="email"
                                    name="email" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={e => this.change(e)} 
                                />
                                <Input 
                                    type="text"
                                    name="bio" 
                                    placeholder="Biography" 
                                    value={this.state.bio} 
                                    onChange={e => this.change(e)} 
                                />
                                <SimpleButton 
                                    type="submit"
                                    name="Update settings"
                                    bsStyle="primary"
                                    disabled={inProgress}
                                />
                            </form>
                        </Col>
                    </Row>
                    {/* <form onSubmit={e => this.submit(e)}>
                        {/* <input name="image" placeholder="Image Url" value={this.state.image} onChange={e => this.change(e)} /><br /> */}
                        {/* <input name="name" placeholder="Username" value={this.state.name} onChange={e => this.change(e)} /><br /> */}
                        {/* <input name="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)} /><br /> */}
                        {/* <input name="bio" placeholder="Biography " value={this.state.bio} onChange={e => this.change(e)} /><br /> */}
                        {/* <input name="password" placeholder="New password" value={this.state.password} onChange={e => this.change(e)} /><br /> */}
                        {/* <button type="submit"
                            disabled={inProgress}>
                            Update Settings
                    </button>
                    </form> */}
                    </div>
                </div>
            );
        }
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
