import axios from "axios";
import {BASE_URL} from "@/services/const";
import {AuthStore} from "@/store";
axios.defaults.baseURL= BASE_URL;

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.request.use(function (config){
    const store = AuthStore()
    if(!store.user)
        return config
    config.headers.Authorization = 'Bearer ' + store.user.accessToken
    return config
})
