import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import TabContainer from '../../../components/TabContainer/TabContainer';
import SidebarContainer from '../../../components/SidebarContainer/SidebarContainer';
import ScrollToTopContainer from '../../../components/ScrollToTopContainer/ScrollToTopContainer'; 


export default function Home({tabList, onClick}) {

    return (
        <Container>
            <Row>
                <Col md={9} className="feed-toggle">
                    <TabContainer tabList={tabList} />   
                </Col>
                <Col md={3}>
                    <SidebarContainer onClick={onClick}/>
                </Col>
            </Row>
            <Row>
                <ScrollToTopContainer scrollStepInPx="50" delayInMs="16.66" />
            </Row>
        </Container >
    );
}

Home.propTypes = {   
    tabList: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

