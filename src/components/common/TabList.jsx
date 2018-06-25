import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
//import HomeSidebar from './HomeSidebar/HomeSidebar';
//import HomeFeed from './HomeFeed/HomeFeed';

export default class TabList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabList: [ ...props.tabList ]
        }
    }

   

    handleTabClick = id => {
        const updatedState = this.state.tabList.map(function (tab, index) {
            if (index == id) {
                tab.active = true;
            }
            else {
                tab.active = false;
            }

            return tab;
        })

        this.setState({
            tabList: updatedState
        })

        this.props.onTabClick(id);
    }


    render() {     
        let _this = this;
        const tabList = this.state.tabList.map( tab => {
            return <li onClick={e => _this.handleTabClick(tab.id)} class={tab.active? "active" : null}>{tab.title}</li>;
        })        

        return (
            <div class="container">
                <ul className="nav nav-tabs">
                    {tabList}
                </ul>
            </div>
        );
    }

    
    
}