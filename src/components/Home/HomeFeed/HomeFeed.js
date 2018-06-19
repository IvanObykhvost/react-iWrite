import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import HomeFeedPost from './HomeFeedPost/HomeFeedPost';

export default function HomeFeed({ posts }){
    return (
        <Tabs defaultActiveKey={1} id="tab-feed">
            <Tab eventKey={1}
                title={"Your Feed"}>
                {
                    posts.map((post, ind) =>
                        <HomeFeedPost key={ind} post={post} />)
                }
            </Tab>
            <Tab
                eventKey={2}
                title={"Global Feed"}>
                Tab 1Tab 1Tab 1Tab 1
            </Tab>
        </Tabs>
    )
}