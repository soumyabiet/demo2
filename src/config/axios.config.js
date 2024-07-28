import axios from 'axios';
// Next we make an 'instance' of it
const service = axios.create({
  baseURL: 'https://node-login-repo.onrender.com',
  timeout: 20000
});

// Also add/ configure interceptors && all the other cool stuff
service.interceptors.request.use( config => {
  if(localStorage.getItem('token')) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
  }
  
  return config;
}, error => {
  Promise.reject(error);
})


export default service;
