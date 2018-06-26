import { connect } from 'react-redux'
import { postAdd, postUpdate } from '../../actions/editor'
import Editor from './Editor'
import PropTypes from 'prop-types'


const getPost = (posts, postId) => {
    if (typeof postId == "undefined") {      
        return {
            title: '',
            topic: '',
            message: '',
            tags: ''
        }
    } else {              
        return posts.find( post => post.id == postId)
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: getPost(state.posts, ownProps.postId), 
})

const mapDispatchToProps = function (dispatch, ownProps) {
    //add
    if (typeof ownProps.postId == "undefined") {
        return {
            onSubmit: post => dispatch(postAdd(post)),
            //onLoad: () => { }
        }
    }
    //update
    else {
        return {
            onSubmit: post => dispatch(postUpdate(post)),
            //onLoad: () => dispatch(postLoad(ownProps.postId))
        }
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)
