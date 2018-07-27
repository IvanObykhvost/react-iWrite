import React from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import api from '../../api';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.tabList = [
            { id: 0, title: "Your Feed", active: true, onLoad(page, limit){ return api.Posts.feed(page, limit); }},
            { id: 1, title: "Global Feed", active: false, onLoad(page, limit){ return api.Posts.all(page, limit); }}
        ] 

        this.tabListWithoutUser = [
            { id: 1, title: "Global Feed", active: true, onLoad(page, limit){ return api.Posts.all(page, limit); }}
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