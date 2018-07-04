import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class TabList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabList: [ ...props.tabList ]
        }
    }   

    handleTabClick = id => {
        //is clicked tab already selected?
        const selectedTab = this.state.tabList.find(function (tab) { return tab.id === id; });
        if (selectedTab.active) {
            return
        }
        //is clicked tab NOT selected
        else {
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
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.tabList) !== JSON.stringify(this.props.tabList)) {        
            this.setState({
                tabList: [...this.props.tabList]
            })
        }
    }

    render() {     
        let _this = this;
        const tabList = this.state.tabList.map( tab => {
            return <li key={tab.id} onClick={e => _this.handleTabClick(tab.id)} className={tab.active? "active" : null}>{tab.title}</li>;
        })        

        return (
            <div>
                <ul className="nav nav-tabs">
                    {tabList}
                </ul>
            </div>
        );
    }
}

TabList.propTypes = {
    tabList: PropTypes.array.isRequired,
    onTabClick: PropTypes.func.isRequired
}