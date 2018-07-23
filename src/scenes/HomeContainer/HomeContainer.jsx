import React from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import api from '../../api';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.tabList = [
            { id: 0, title: "Your Feed", active: true, onLoad(){ return api.Posts.feed(); }},
            { id: 1, title: "Global Feed", active: false, onLoad(){ return api.Posts.all(); }}
        ] 

        this.tabListWithoutUser = [
            { id: 1, title: "Global Feed", active: true, onLoad(){ return api.Posts.all(); }}
        ]
        this.state = {
            currentUser: this.props.currentUser,
            tabList: this.props.currentUser ? this.tabList : this.tabListWithoutUser
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentUser: nextProps.currentUser,
            tabList: nextProps.currentUser ? this.tabList : this.tabListWithoutUser
        });
    }

    render() {
        let {state} = this;

        return(
            <Home
                tabList={state.tabList}
                state={state}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(
    mapStateToProps,
    null
)(HomeContainer);