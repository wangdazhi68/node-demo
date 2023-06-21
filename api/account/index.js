import axios from "axios";
var baseURL;
if (process.env.NODE_ENV === 'development') {
    baseURL = '/api/account/api';
} else {
    baseURL = '/account/api';
}

axios.defaults.headers = {}
const service = axios.create({
    baseURL,
    timeout: 86400000,
    headers: {}
    // headers: {
    //     // 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //     'content-type': "application/json;charset=UTF-8"
    // }
});


service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


service.interceptors.response.use(
    response => {
        const { status, data } = response;
        if (response instanceof Blob) {
            return response;
        }
        if (status !== 200) {
            return false;
        } else {
            return data
        }
    },
    error => {
        return Promise.reject(error.response);
    }
);

export default service;