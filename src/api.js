import axios from 'axios';
import qs from 'qs';
import { auth } from './actions/auth';

let api = axios.create({
    baseURL: 'http://10.10.1.220:4081/api'
});



const encode = encodeURIComponent;
const responseData = res => res.data;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const config =  {
    headers: {
        'authorization': window.localStorage.getItem('jwt')
    }
};

const requests = {
    // del: url =>
    //   superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
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
    get: id => 
        requests.get(`/post/${id}`),
    all: () => 
        requests.get('/posts'),
    byAuthor: (username) =>
        requests.get(`/posts?author=${encode(username)}`)
}

const Profile = {
    get: username => 
        requests.get(`/profile/${username}`)
}

export default {
    Auth,
    Posts 
}