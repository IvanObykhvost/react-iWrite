import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Row, Col, Tabs, Tab, TabContainer } from 'react-bootstrap';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <Header />
                <div className='container'>
                    <Row className='show-grid'>
                        <Col md={9}>
                            <Tabs defaultActiveKey={1} id="tab-feel">
                                <Tab eventKey={1} title="Your Feed">
                                    Tab 2Tab 1Tab 1Tab 1
                                </Tab>
                                <Tab eventKey={2} title="Global Feed" >
                                    Tab 1Tab 1Tab 1Tab 1
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={3}>
                            <div className='sidebar'>
                                <p>Popular tags</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}