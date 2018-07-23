import React from 'react';
import { connect } from 'react-redux';
import { currentUser } from '../../data/user/action';
import App from "./App/App";

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

        if(state.inProgress) 
            return <div>Приложение загружается, подождите пожалуйста</div>;
        
        return(
            <App currentUser={this.props.currentUser}/>
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