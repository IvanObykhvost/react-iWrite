import React, { Component } from 'react';
import ArticleContainer from "../../components/Article/ArticleContainer";

export default function ArticlePage({match}){
    return (
        <ArticleContainer postId = {match.params.id }/>
    )
}

