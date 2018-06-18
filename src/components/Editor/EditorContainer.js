import { connect } from 'react-redux'
import { postAdd, postUpdate } from '../../actions/editor'
import Editor from './Editor'
import PropTypes from 'prop-types'


const getPost = (posts, postId) => {
    if (typeof postId == "undefined") {      
        return {
            id: posts.length + 1,
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

const mapDispatchToProps = function (dispath, ownProps) {
    //add
    if (typeof ownProps.postId == "undefined") {
        return {
            onSubmit: post => dispath(postAdd(post))
        }
    }
    //update
    else {
        return {
            onSubmit: post => dispath(postUpdate(post))
        }
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)
