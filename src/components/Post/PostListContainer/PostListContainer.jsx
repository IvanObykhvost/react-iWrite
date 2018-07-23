import React from 'react';
import PostPreview from './PostPreview/PostPreview';
import api from '../../../api';

export default class PostListContainer extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            posts: [],
            onLoad: this.props.onLoad,
            error: null,
            inProgress: true
        }
    }
   
    componentDidMount() {
        this.onLoad();
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
                posts: [],
                onLoad: nextProps.onLoad,
                inProgress: true
            },
            () => this.onLoad()
        );
    }

    onLoad = () => {
        this.state.onLoad()
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    this.setState({
                        posts: data,
                        inProgress: false
                    });
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
                        posts,
                        inProgress: false
                    });
                }
            )
            .catch(e => this.setState({error: e}))
    }

    render() {        
        let {state} = this;

        if(state.error) 
            return <div className="error">{state.error}</div>;

        return (
            !state.inProgress ?
                state.posts.length != 0 ?
                    <div className="post-container">                       
                        {
                            state.posts.map(post => 
                                <PostPreview 
                                    key={post.id} 
                                    post={post}
                                    onClick={e => this.handelClickFavorite(post.id, post.favorited)}
                                />
                            )
                        }                       
                    </div>
                    :
                    <div><p>Sorry, no posts found.</p></div>
                :
                <div>Please wait, posts are loading...</div>
        );

    }
}