import React, { Component } from 'react';
import PostContainer from "../../components/Post/PostContainer";


export default function PostPage({match}){
    return (
        <PostContainer postId = {match.params.id }/>
    )
}

