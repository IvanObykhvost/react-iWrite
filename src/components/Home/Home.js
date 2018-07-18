import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TabList from '../common/TabList';
import PostList from '../common/PostList';
import Sidebar from '../common/Sidebar';
import PropTypes from 'prop-types';

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
        const { tabList, posts, onTabClick, tags } = this.props;        
        return (
            <div className="container page">
                <Row>
                    <Col md={9} className="feed-toggle">
                        <TabList tabList={tabList} onTabClick={onTabClick} />   
                        <PostList posts={posts} />                         
                    </Col>
                    <Col md={3}>
                        <Sidebar tags={tags}/>
                    </Col>
               </Row>
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

