import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Stories from "./Stories/Stories";

class StoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           currentUser: this.props.currentUser
        };
    }

    render(){

        return(
            <Stories />
        )
    }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser
});

export default connect(mapStateToProps, null)(StoriesContainer);