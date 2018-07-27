import React from 'react';
import { connect } from 'react-redux';
import { currentUser } from '../../data/user/action';
import App from "./App/App";
import Loader from '../../components/Loader/Loader';

class AppContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            inProgress: true
        }
    }

    componentWillMount() {
        this.props.onLoad()
            .then(
                () => this.setState({
                    inProgress: false
                })
            )
    }

    render() {   
        let {state} = this;

        return(
            !state.inProgress ?
                <App currentUser={this.props.currentUser}/>
                :
                <Loader />
        );
    }
}

const mapStateToProps = ({ user : { currentUser} }) => ({
    currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch(currentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);