import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { getToken } from "../utils/auth";

const API = axios.create({ baseURL: "/api" });

API.interceptors.request.use(
  (req) => {
    NProgress.start();
    const user = getToken();
    if (user) {
      req.headers.authorization = user?.token;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

API.interceptors.request.use(
  (res) => {
    NProgress.done();
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default API;