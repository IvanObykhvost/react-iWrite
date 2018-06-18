import React, { Component } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import HomeContainer from './HomeContainer';
import Header from '../Header/Header';
import HomeSidebar from './HomeSidebar/HomeSidebar';
import HomeFeed from './HomeFeed/HomeFeed';

export default function Home({ posts }) {
    return (
        <div className="homePage">
            <Header />
            <div className='container'>
                <Row className='show-grid'>
                    <Col md={9}>
                        <HomeFeed posts={posts}/>
                    </Col>
                    <Col md={3}>
                        <HomeSidebar tags={[]}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

