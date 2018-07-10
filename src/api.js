import axios from 'axios';
import qs from 'qs';

let api = axios.create({
    //baseURL: 'http://10.10.1.220:4082/api'
    baseURL: 'http://10.10.1.220:4081/api'
});

const encode = encodeURIComponent;
const responseData = res => res.data;

const config =  {
    headers: {
        'authorization': window.localStorage.getItem('jwt')
    }
};

const requests = {
    del: url =>
        api.delete(url, config).then(responseData),
    get: url =>
        api.get(url, config).then(responseData),
    put: (url, body) =>
        api.put(url, body, config).then(responseData),
    post: (url, body) =>
        api.post(url, qs.stringify(body), config).then(responseData)
};
  
const Auth = {
    current: () =>
      requests.get('/user'),
    login: (email, password) => 
        requests.post('/login', { email, password }),
    register: (name, email, password) =>
        requests.post('/register', { name, email, password }),
    save: user =>
      requests.put('/user', { user })
};

const Posts = {
    create: post => 
        requests.post('/post', post),
    update: post => 
        requests.put(`/post/${post.id}`, post),
    get: id => 
        requests.get(`/post/${id}`),
    all: () => 
        requests.get('/posts'),
    byAuthor: username =>
        requests.get(`/posts?author=${encode(username)}`),
    byFavorite: username =>
        requests.get(`/posts?favorited=${encode(username)}`),
    feed: () =>
        requests.get(`/posts/feed`),
    favorite: id =>
        requests.post(`/post/${id}/favorite`),
    unfavorite: id =>
        requests.del(`/post/${id}/unfavorite`)
    
};

const Comments = {
    create: (postId, comment) =>
      requests.post(`/post/${postId}/comments`, { comment }),
    delete: (postId, commentId) =>
      requests.del(`/post/${postId}/comments/${commentId}`),
    forArticle: postId =>
      requests.get(`/post/${postId}/comments`)
};

const Profile = {
    get: username => 
        requests.get(`/profile/${username}`),
    follow: username => 
        requests.post(`/profile/${username}/follow`),
    unfollow: username => 
        requests.del(`/profile/${username}/unfollow`)
};

export default {
    Auth,
    Posts,
    Profile,
    Comments 
};