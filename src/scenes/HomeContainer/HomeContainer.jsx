import React from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import api from '../../api';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            tabList: this.getTabList(this.props.currentUser)
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.currentUser !== prevProps.currentUser){
            this.setState({
                currentUser: this.props.currentUser,
                tabList: this.getTabList(this.props.currentUser)
            });
        }
    }

    getTabList = user => {
        if(user){
            return [{ 
                    id: 0, 
                    title: "Your Feed", 
                    active: true, 
                    type: 'post',
                    onLoad(page, limit){ return api.Posts.feed(page, limit); }
                },{ 
                    id: 1, 
                    title: "Global Feed", 
                    active: false, 
                    type: 'post',
                    onLoad(page, limit){ 
                        // let result = api.Posts.all(page, limit);
                        return api.Posts.all(page, limit); 
                    }
            }];
        }

        return [{ 
                id: 1, 
                title: "Global Feed", 
                active: true, 
                type: 'post', 
                onLoad(page, limit){ return api.Posts.all(page, limit); }
        }];

    }

    handelAddTab = tag => {
        let tabList = this.getTabList(this.state.currentUser);
        tabList = tabList.map(tab => {
            tab.active = false;
            return tab;
        });
        tabList.push({
            id: 2,
            title: `#${tag}`,
            active: true,
            type: 'post',
            onLoad(page, limit){ 
                return api.Posts.byTag(tag, page, limit);
            }
        });
        this.setState({tabList});
    }

    render() {
        let {state} = this;

        return(
            <Home
                tabList={state.tabList}                
                onClick={this.handelAddTab}
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