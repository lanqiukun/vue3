import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://api.cpengx.cn/metashop/api/',
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
});



instance.interceptors.request.use(function (config) {


    return config;
}, function (error) {
    
    return Promise.reject(error);
});




instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default function (argc) {
    return instance(argc)
}