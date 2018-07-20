import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import api from "../../api";
import Article from './Article/Article';

class ArticleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            userName: this.props.userName,
            article: {
                post: {
                    id: this.props.match.params.id
                },
                error: null,
                inProgress: true,
                success: null,
                isOwner: false
            },
            comments: {
                commentsData: null,
                error: null,
                inProgress: true
            }
        }
    }

    componentDidMount(){
        const id = this.state.article.post.id;
        api.Posts.get(id)
            .then(
                data => {
                    if(data.error){
                        this.setState({
                            article: {
                                ...this.state.article,
                                inProgress: false,
                                error: data.error ? data.error : null
                            }
                        });
                        return Promise.reject();
                    }
                    else {
                        const autorName = data.post.author.name;
                        this.setState({
                            article: {
                                ...this.state.article,
                                post: data.post,
                                inProgress: false,
                                isOwner: autorName === this.state.userName ? true : false
                            }
                        });
                        //return api.Comments.forArticle(id);
                    }    
                }
            )
            // .then(
            //     data => {
            //         if(data.error){
            //             this.setState({
            //                 comments: {
            //                     ...this.state.comments,
            //                     error: data.error ? data.error : null,
            //                     inProgress: false
            //                 }
            //             });
            //         }
            //         else {
            //             this.setState({
            //                 comments: {
            //                     ...this.state.comments,
            //                     commentsData: data.comments,
            //                     inProgress: false
            //                 }
            //             });
            //         }
            //     }
            // )
    }

    onClickDelete = () => {
        //inProgress
        api.Posts.delete(this.state.article.post.id)
            .then(
                data => {
                    this.setState({
                        article: {
                            ...this.state.article,
                            error: data.error ? data.error : null,
                            success: data.success ? data.success : null
                        }
                    });
                }
            )
    }

    render() {
        let {article, comments} = this.state;

        if (article.success) {
            return <Redirect to='/' />;
        }

        if (article.error) {
            return <p className="error">{article.error}</p>;
        }

        if(comments.error){
            comments.error = <p className="error">{comments.error}</p>;
        }

        
        return (
            !article.inProgress ? // && !comments.inProgress ?
            <Article 
                onClickDelete={e => this.onClickDelete()}
                article={article}
                //comments={comments}
            />
            :
            null
        )
    }
}

const mapStateToProps = (state, props) => ({
    userName: state.common.currentUser.name
})

// const mapDispatchToProps = (dispatch, props) => ({
//     onLoad: () => {
//         dispatch(articlePost(props.postId));
//         dispatch(articleComments(props.postId));
//     },
//     onUnload: () => {
//         dispatch(articleUnload());
//     },
//     onPostDelete: (post) => {
//         dispatch(articlePostDelete(post));
//     },
// });
export default connect(mapStateToProps, null)(ArticleContainer)


