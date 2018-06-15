import React from 'react';
import { connect } from 'react-redux';
import { postNew } from '../../actions/post';
import Header from '../../components/Header/Header';
import { bindActionCreators } from 'redux';

//export function PostNew ({ dispatch }){
class PostNew extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        title: '2',
        topic: '2',
        message: '2',
        tags: '2'
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = e => {
        e.preventDefault();
        console.log(this.state);
        /*if (!state.title.value.trim() || !state.topic.value.trim() || !state.message.value.trim() || !state.tags.value.trim()) {
                        console.log("one of the field is empty")
                        return
           */
          this.props.dispatch(postNew(this.state))
          
    }

    render() {
        return (
            <div>
                <Header />
                <form onSubmit={e => this.submit(e)}>
                    <input name="title" placeholder="Title" value={this.state.title} onChange={e => this.change(e)} /><br />
                    <input name="topic" placeholder="Topic" value={this.state.topic} onChange={e => this.change(e)} /><br />
                    <input name="message" placeholder="Message" value={this.state.message} onChange={e => this.change(e)} /><br />
                    <input name="tags" placeholder="Tags" value={this.state.tags} onChange={e => this.change(e)} /><br />
                    <button type="submit">
                        Publish Article
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(PostNew);