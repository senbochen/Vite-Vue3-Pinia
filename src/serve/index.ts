import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import qs from 'qs'
import { ElMessage } from 'element-plus'

import * as cancelRequest from "./tool";
class Http {
  public instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "",
      withCredentials: false, // 跨域携带 cookie
    });
    this.interceptors();
  }

  interceptors() {
    this.instance.interceptors.request.use(
      (config: any) => {
        debugger
        if (cancelRequest.tokens.has(cancelRequest.getKey(config))) {
          cancelRequest.remove(config); // 取消上一次当前路径的请求
        } else {
          cancelRequest.add(config); // 添加这次路径的请求
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        if (cancelRequest.tokens.has(cancelRequest.getKey(response.config))) {
          cancelRequest.remove(response.config); // 取消上一次当前路径的请求
        }
        console.log(response)
        ElMessage('请求成功~')
        return response;
      },
      (error) => {
        // cancelRequest 取消请求后会抛出 catch 错误， axios.isCancel 判断不是手动取消的错误则调用 errTip 提示
        // !axios.isCancel(error) && errTip(error?.response?.status, error?.response?.data?.message);
        console.log(error)
        ElMessage(JSON.stringify(error))
        return Promise.reject(error);
      }
    );
  }

  get(url: string, params: any = {}, config: any = {}) {
    return this.instance({
      method: "get",
      url,
      params,
      ...config,
    })
  }

  post(url: string, data: any = {}, config: any = {}) {
    return this.instance({
      method: "post",
      url,
      data: qs.stringify(data),
      ...config,
    })
  }


  request(options: AxiosRequestConfig) {
    this.instance(options)
  }
}

const { request, post, get } = new Http().instance

export { request, post, get }
