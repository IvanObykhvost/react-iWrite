import React from "react";
import { Row, Col } from 'react-bootstrap';

export default class Editor extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let { post } = this.props;
        return(
            <div className="post-view">
                <div className='banner'>
                    <Col md={9} className='banner-container'>
                        <h2>{post.title}</h2>
                    </Col>
                </div>
                <div className='post-container'> 
                    <Col md={9} className='message'>
                        {post.message}
                    </Col>
                </div>
            </div>

        )
    }
}

