import axios from 'axios';
import qs from 'qs';

let api = axios.create({
    baseURL: 'http://127.0.0.1:4081/api'
});



const encode = encodeURIComponent;
const responseBody = res => res.body;
const responseData = res => res.data;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
    // del: url =>
    //   superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        api.get(url).then(responseBody),
    // put: (url, body) =>
    //   superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        api.post(url, qs.stringify(body)).then(responseData)
  };
  
  const Auth = {
    current: () =>
      requests.get('/user'),
    login: (email, password) => 
        requests.post('/login', { email, password }),
    register: (username, email, password) =>
        requests.post('/register', { username, email, password }),
    // save: user =>
    //   requests.put('/user', { user })
  };

export default {
    Auth 
}