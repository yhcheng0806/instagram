import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { getUserInfo } from "../utils/auth";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

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

export const getMsgList = (postId) => API.get(`msgs/${postId}`);
export const sendMsg = (data) => API.post("msgs/send", data);
export const likeMsg = (msgId, data) => API.put(`msgs/like/${msgId}`, data);

export const getUser = (userId) => API.get(`users/${userId}`);
export const updateUser = (data) => API.post("users/update", data);
export const followUser = (userId, data) => API.post(`users/follow/${userId}`, data)

export const getPosts = () => API.get("posts");
export const getPost = (postId) => API.get(`posts/${postId}`);
export const createPost = (data) => API.post("posts/create", data);
export const followingPost = (data) => API.get("posts/following", data);
export const updatePost = (postId, data) => API.put(`/posts/update/${postId}`, data);
export const deletePost = (postId, data) => API.delete(`/posts/delete/${postId}`, data);
export const likePost = (postId, data) => API.put(`posts/like/${postId}`, data);
export const getSelfPosts = (data) => API.post(`posts/self`, data);
