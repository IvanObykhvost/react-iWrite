import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TabList from '../common/TabList';
import PostList from '../common/PostList';
import Sidebar from '../common/Sidebar';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {    
        this.props.onLoad();
    }          

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.onLoad();
        }
    }

    render() {
        const tabList = this.props.tabList;
        const posts = this.props.posts;
        const onTabClick = this.props.onTabClick;        
        
        return (
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <TabList tabList={tabList} onTabClick={onTabClick} />                            
                        </div>
                        <PostList posts={posts} />
                    </div>
                    <Sidebar/>
               </div>
            </div>
        );
    }
}

Home.propTypes = {   
    tabList: PropTypes.array.isRequired,
    posts: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired,
    onTabClick: PropTypes.func.isRequired,
}

