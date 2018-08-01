import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PostListContainer from '../../Post/PostListContainer/PostListContainer';
import FollowerListContainer from '../../FollowerListContainer/FollowerListContainer';

export default function Tab({tabList, selectTab, onClick}) {
    return (
        <Row>
            <Col md={12}>
                <ul className="nav nav-tabs">
                    {
                        tabList.map(tab => 
                            <li 
                                key={tab.id} 
                                onClick={e => onClick(tab.id)} 
                                className={tab.active? "active" : null}
                            >
                                {tab.title}
                            </li>
                        )
                    }
                </ul>
            </Col>
            <Col md={12}>
                {
                    selectTab.type === 'post' ?
                        <PostListContainer 
                            onLoad={selectTab.onLoad}
                            title={selectTab.title}
                        />
                        :
                        <FollowerListContainer
                            onLoad={selectTab.onLoad}
                            title={selectTab.title}
                        />
                }
            </Col>
        </Row>
    );
}

Tab.propTypes = {
    selectTab: PropTypes.object.isRequired,
    tabList: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}