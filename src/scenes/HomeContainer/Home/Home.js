import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import TabContainer from '../../../components/TabContainer/TabContainer';
import SidebarContainer from '../../../components/SidebarContainer/SidebarContainer';


export default function Home({tabList}) {

    return (
        <div className="container">
            <Row>
                <Col md={9} className="feed-toggle">
                    <TabContainer tabList={tabList} />   
                </Col>
                <Col md={3}>
                    <SidebarContainer />
                </Col>
            </Row>
        </div>
    );
}

Home.propTypes = {   
    tabList: PropTypes.array.isRequired,
}

