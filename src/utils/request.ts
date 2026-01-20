import axios from "axios";
import { message } from "antd";
import storage from "@/utils/storage";
const api = import.meta.env.VITE_BASE_API;
const instance = axios.create({
  baseURL: api,
  timeout: 6000,
  timeoutErrorMessage: "请求超时，请稍后重试",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + storage.get("token"),
    "X-Requested-With": "XMLHttpRequest",
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (data.code === 401) {
      // 处理 401 错误，例如跳转到登录页
      message.error(data.msg);
      window.location.href = "/login";
      return Promise.reject(data.msg);
    } else if (data.code === 403) {
      // 处理 403 错误，例如提示用户无权限
      message.error(data.msg);
      return Promise.reject(data.msg);
    } else if (data.code !== 200) {
      message.error(data.msg);
      return Promise.reject(data.msg);
    }
    return data.data;
  },
  (error) => {
    // 对响应错误做点什么
    message.error(error.toString());
    return Promise.reject(error);
  }
);

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params);
  },
  put<T>(url: string, params?: object): Promise<T> {
    return instance.put(url, params);
  },
  delete<T>(url: string, params?: object): Promise<T> {
    return instance.delete(url, { params });
  },
};
