import React from "react";
import { Row, Col } from 'react-bootstrap';

export default class Article extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onLoad()
    }

    render() {
        const { post, postError } = this.props;

        if (!post && !postError) {
            return <div>Please wait, post is loading...</div>
        }

        else if (postError) {
            return <div>{postError}</div>
        }

        else {
            return (
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
}

