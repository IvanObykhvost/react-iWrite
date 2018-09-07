import React from 'react';
import { connect } from 'react-redux';
import ManagePosts from './ManagePosts/ManagePosts';
import Label from '../../../components/Form/Label/Label';
import api from '../../../api';

class ManagePostsContainer extends React.Component {
    constructor(props){
        super(props);
        const onLoad = (page, limit) => {
            return api.Posts.byAuthor(this.props.currentUser.name, page, limit);
        }
        this.state = {
            currentUser: this.props.currentUser,
            error: null,
            onLoad,
            inProgress: false,
            success: null,
            posts: []
        }
    }

    handelLoadMore = (page, limit) => {
        this.setState({
            inProgress: true,
            posts: []
        });

        return this.state.onLoad(page, limit)
            .then(data => {
                if(data.error || data.error=== "")
                    throw data.error === "" ? "Server error" : data.error;      
                    
                let {posts} = {...this.state};
                posts = [...data.posts];

                this.setState({
                    posts,
                    inProgress: false
                });

                return {
                    length: data.posts.length, 
                    count: data.count
                };
            })
            .catch(e => this.setState({error: e}))
    }

    handelClickDelete = (id) => {
        //inProgress
        api.Posts.delete(id)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);
                    let {posts} = {...this.state};
                    posts = posts.filter(post => post.id !== id)
                    this.setState({
                        posts,
                        error: null,
                        success: data.success ? data.success : null
                    });
                }
            )
            .catch(e => this.setState({error: e }))
    }

    render() {
        let {state} = this;
        if(state.error)
            return <Label className="error" message={state.error}/>;

        return (
                <ManagePosts
                    onLoad={this.handelLoadMore}
                    inProgress={state.inProgress}
                    posts={state.posts}
                    onDelete={this.handelClickDelete}
                />
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
