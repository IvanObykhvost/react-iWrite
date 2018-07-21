import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import api from "../../api";
import Article from './Article/Article';

class ArticleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            userName: this.props.currentUser ? this.props.currentUser.name : null,
            post: {
                id: this.props.match.params.id
            },
            error: null,
            inProgress: true,
            success: null,
            isOwner: false

        }
    }

    componentDidMount(){
        const id = this.state.post.id;
        api.Posts.get(id)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    const autorName = data.post.author.name;
                    const isOwner = this.state.userName ? autorName === this.state.userName : false
                    this.setState({
                        post: data.post,
                        inProgress: false,
                        isOwner
                    });
                }
            )
            .catch(e => this.setState({error: e }))
    }

    onClickDelete = () => {
        //inProgress
        api.Posts.delete(this.state.post.id)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    this.setState({
                        error: null,
                        success: data.success ? data.success : null
                    });
                }
            )
            .catch(e => this.setState({error: e }))
    }

    render() {
        let {state} = this;

        if (state.success) {
            return <Redirect to='/' />;
        }

        if (state.error) {
            return <p className="error">{state.error}</p>;
        }
        
        return (
            !state.inProgress ?
                <Article 
                    onClickDelete={e => this.onClickDelete()}
                    article={state}
                />
                :
                null
        )
    }
}

const mapStateToProps = (state, props) => ({
    currentUser: state.common.currentUser
})

export default connect(mapStateToProps, null)(ArticleContainer)


