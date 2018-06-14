import React from 'react'
import { connect } from 'react-redux'
import { postNew } from '../../actions/post'

export function PostNew ({ dispatch }){
    let input = {
        title: '',
        topic: '',
        message: '',
        tags: ''
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.title.value.trim() || !input.topic.value.trim() || !input.message.value.trim() || !input.tags.value.trim()) {
                    console.log("one of the field is empty")
                    return
                }
                console.log("success")
                dispatch(postNew(input))
            }}>
                <input ref={node => input.title = node} /><br />
                <input ref={node => input.topic = node} /><br />
                <input ref={node => input.message = node} /><br />
                <input ref={node => input.tags = node} /><br />
                <button type="submit">
                    Publish Article
                </button>
            </form>
        </div>
    )
}

export default connect()(PostNew)