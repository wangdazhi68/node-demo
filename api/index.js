var axios = require('axios');
axios.defaults.headers.get['Pragma'] = 'no-cache';
axios.defaults.headers.get['Cache-Control'] = 'no-cache, no-store';
const service = axios.create({
    baseURL:'http://website.tsapre.cn/api/',
    timeout: 10000,
    headers: {}
});
service.interceptors.request.use(
    config => {
        // config.headers['Authorization'] ='Bearer 25db73f14ac34eb69143b39526fb119d'
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
service.interceptors.response.use(
    response => {
        const { status, data } = response;
        // if (response instanceof Blob) {
        //     return response;
        // }
        return data;
    },
    error => {
        let res = error.response;
        return Promise.reject(res);
    }

);

module.exports=service;