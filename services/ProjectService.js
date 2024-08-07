import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = 'http://localhost:8081/projects';
// Add a request interceptor
axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = getToken();

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
//need to add userId and role condition
export const getAllProjects = () => axios.get(BASE_REST_API_URL)
export const getAllProject = (id) => axios.get(BASE_REST_API_URL + '/')
export const getProject = (id) => axios.get(BASE_REST_API_URL + '/' + id)

export const updateProject = (id, updatedata) => axios.put(BASE_REST_API_URL + '/' + id, updatedata)

export const deleteProject = (id) => axios.delete(BASE_REST_API_URL + '/' + id)