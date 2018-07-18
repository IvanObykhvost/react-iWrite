import { connect } from 'react-redux';
import { editorPost, editorEmptyPostInitialize, editorPostChange, editor, editorUnload } from '../../actions/editor';
import Editor from './Editor';
import { EDITOR_REQUEST_TYPES } from '../../constant/constant';

const mapStateToProps = (state, props) => ({
    postId: props.postId,
    editor: state.editor
})

const mapDispatchToProps = function (dispatch, props) {
    let result = {};

    //update
    if (props.postId) {
        result = {
           // onChange: (key, value) => dispatch(editorPostChange(key,value)),
            onSubmit: post => dispatch(editor(post, EDITOR_REQUEST_TYPES.UPDATE)),
            onLoad: () => dispatch(editorPost(props.postId)),            
        }
    }
    //add
    else  {
        result = {
            //onChange: (key, value) => dispatch(editorPostChange(key, value)),
            onSubmit: post => dispatch(editor(post, EDITOR_REQUEST_TYPES.ADD)),
            onLoad: () => dispatch(editorEmptyPostInitialize())
        }
    }  

    return result = {
        ...result,
        onChangeTags: (values) => dispatch(editorPostChange("tags", values)),
        onChange: (key, value) => dispatch(editorPostChange(key, value)),
        onUnload: () => dispatch(editorUnload())
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)
