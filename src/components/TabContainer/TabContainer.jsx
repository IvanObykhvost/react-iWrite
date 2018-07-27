import React from 'react';
import Tab from './Tab/Tab';

export default class TabContainer extends React.Component {
    constructor(props) {
        super(props);

        let selectTab = this.props.tabList.find(tab => tab.active);
        this.state = {
            tabList: this.props.tabList,
            selectTab
        }
    }   

    componentDidUpdate(prevProps){
        if(JSON.stringify(this.props.tabList) !== JSON.stringify(prevProps.tabList)){
            let selectTab = this.props.tabList.find(tab => tab.active);
            this.setState({
                tabList: this.props.tabList,
                selectTab
            });
        }
    }

    handleClickTab = id => {
        const selectedTab = this.state.tabList.find(function (tab) { return tab.id === id; });
        if (selectedTab.active) return;

        const tabList = this.state.tabList.map(tab => {
            tab.active = tab.id === id;
            return tab;
        })
        
        const selectTab = this.props.tabList.find(tab => tab.active);
        this.setState({
            tabList,
            selectTab
        });
    }

    render() {     
        let {state} = this;

        return (
            <Tab 
                tabList={state.tabList} 
                selectTab={state.selectTab} 
                onClick={this.handleClickTab}
            />
        );
    }
}