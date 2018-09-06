import React from 'react';
import { connect } from 'react-redux';
import api from '../../api';
import Label from '../../components/Form/Label/Label';
import Loader from '../../components/Loader/Loader';
import ManagePosts from '../ManagePosts/ManagePosts';

class ManagePostsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            error: null,
            inProgress: false,
            posts: []
        }
    }

    render() {
        let {state} = this;
        if(state.error)
            return <Label className="error" message={state.error}/>;

        return (
            !state.inProgress ? 
                <ManagePosts/>
                :
                <Loader />
        )
        
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(
    mapStateToProps,
    null
)(ManagePostsContainer)
