import axios from "axios";

axios.defaults.baseURL = 'https://api.mokabat.sa/api'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['accept'] = 'application/json'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const lang = sessionStorage.getItem("lang") || "en";
        config.headers["Accept-Language"] = lang;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;