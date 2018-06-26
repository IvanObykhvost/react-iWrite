import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

export default class Editor extends React.Component {
    constructor(props) {
        super(props);      
        this.state = {...this.props.post}
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = e => {
        e.preventDefault();       
        this.props.onSubmit(this.state);
    }

    //componentWillMount(){
    //    this.props.onLoad();
    //}

    render() {
        if (this.props.post === undefined) {
            return <Redirect to='/error' />
        }
        else {
            return (
                <div>
                    {
                    }
                    <form onSubmit={e => this.submit(e)}>
                        <input name="title" placeholder="Title" value={this.state.title} onChange={e => this.change(e)}/><br />
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
}


Editor.propTypes = {
    post: PropTypes.object.isRequired,
}

//export default connect()(Editor);
