import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { getUserInfo } from "../utils/auth";


const API = axios.create({ baseURL:"http://localhost:5000/api/"});

API.interceptors.request.use(
  (req) => {
    NProgress.start();
    const user = getUserInfo();
    if (user) {
      req.headers.authorization = user?.token;
    }

    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

API.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res?.data;
  },
  (err) => {
    NProgress.done();
    return Promise.reject(err);
  }
);

export default API;

export const login = (data) => API.post("auth/login", data);
export const register = (data) => API.post("auth/register", data);

export const upload = (data) => API.post("upload", data);

export const getUser = (id) => API.get(`users/${id}`);
export const updateUser = (data)=>API.post('users/update',data)

export const getPosts = () => API.get("posts");
export const getPost = (id) => API.get(`posts/${id}`);
export const createPost = (data) => API.post("posts/create", data);
export const followingPost = (data) => API.get("posts/following", data);
export const updatePost = (id, data) => API.put(`/posts/update/${id}`, data);
export const deletePost = (id, data) => API.delete(`/posts/delete/${id}`, data);
export const likePost = (id,data) => API.put(`posts/like/${id}`,data);
export const getSelfPosts = (data) => API.post(`posts/self`, data);
