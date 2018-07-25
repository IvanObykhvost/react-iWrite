import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import TabContainer from '../../../components/TabContainer/TabContainer';
import SidebarContainer from '../../../components/SidebarContainer/SidebarContainer';


export default function Home({tabList}) {

    return (
        <Container>
            <Row>
                <Col md={9} className="feed-toggle">
                    <TabContainer tabList={tabList} />   
                </Col>
                <Col md={3}>
                    <SidebarContainer />
                </Col>
            </Row>
        </Container>
    );
}

Home.propTypes = {   
    tabList: PropTypes.array.isRequired,
}

