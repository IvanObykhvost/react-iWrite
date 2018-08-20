import React from 'react';
import { connect } from 'react-redux';
import PostPreview from './PostPreview/PostPreview';
import api from '../../../api';
import { CheckFalseOrTrue } from '../../../utils/Operations';
import PaginationContainer from '../../PaginationContainer/PaginationContainer';

class PostListContainer extends React.Component {
    constructor(props) {
        super(props); 
        
        this.initState = {
            isUser: CheckFalseOrTrue(this.props.currentUser),
            posts: [],
            onLoad: this.props.onLoad,
            error: null,
            inProgress: true,
            title: this.props.title
        }

        this.state = {
            ...this.initState,
        }
    }
   

    componentDidUpdate(prevProps){
        if(this.props.title !== prevProps.title){
            this.setState({
                ...this.initState,
                isUser: CheckFalseOrTrue(this.props.currentUser),
                onLoad: this.props.onLoad,
                title: this.props.title
            });
        }
    }

    handelLoadMore = (page, limit, type) => {

        if(type === PaginationContainer.type.button)
            this.setState({posts: []});

        return this.state.onLoad(page, limit)
            .then(
                data => {
                    if(data.error || data.error=="") {         
                        if(data.error =="")  
                            return Promise.reject("Server error");            
                        else                          
                            return Promise.reject(data.error);
                    }
                    let {posts} = {...this.state};
                    if(type === PaginationContainer.type.loader)
                        posts = [...posts, ...data.posts];
                    if(type === PaginationContainer.type.button)
                        posts = [...data.posts];

                    this.setState({
                        posts,
                        inProgress: false
                    });

                    return {
                        length: data.posts.length, 
                        count: data.count
                    };
                }
            )
            .catch(e => this.setState({error: e}))
    }

    handelClickFavorite = (postId, favorited) => {
        let request = null;
        if(favorited)
            request = api.Posts.unfavorite(postId);
        else
            request = api.Posts.favorite(postId);

        request
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);
                    let {posts} = {...this.state};
                   
                    posts = posts.map(post => {
                        if(post.id === data.post.id)
                            post = {...data.post}
                        return post;
                    });
                    this.setState({
                        posts
                    });
                }
            )
            .catch(e => this.setState({error: e}))
    }

    render() {        
        let {state} = this;

        if(state.error){
            return <div className="error">{state.error}</div>;
        } 
            

        return (
            <div className="post-container">     
                {
                    !state.inProgress ?
                        state.posts.length > 0 ?
                            state.posts.map(post => 
                                <PostPreview 
                                    key={post.id} 
                                    post={post}
                                    onClick={e => this.handelClickFavorite(post.id, post.favorited)}
                                    isUser={state.isUser}
                                />
                            )
                            :
                            <div className="text-align-center"><p>Sorry, no posts found.</p></div>
                        :
                        null
                } 
                <PaginationContainer 
                    onLoad={this.handelLoadMore} 
                    title={state.title}
                    type={PaginationContainer.type.loader}
                    limit={10}
                />
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(
    mapStateToProps,
    null
)(PostListContainer);