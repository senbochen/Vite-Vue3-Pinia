import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import qs from 'qs'
import { ElMessage } from 'element-plus'
import handleNetworkError from './error'
import * as cancelRequest from './tool'
class Http {
  public instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: '',
      withCredentials: false, // 跨域携带 cookie
    })
    this.interceptors()
  }

  interceptors() {
    this.instance.interceptors.request.use(
      (config: any) => {
        cancelRequest.remove(config)
        cancelRequest.add(config)
        return config
      },
      (error) => Promise.reject(error)
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        cancelRequest.remove(response.config)
        console.log(response)
        ElMessage({ type: 'success', message: '请求成功' })
        return response
      },
      (error) => {
        console.log(error)
        handleNetworkError(error.response.status)
        return Promise.reject(error)
      }
    )
  }

  get(url: string, params: any = {}, config: any = {}) {
    return this.instance({
      method: 'get',
      url,
      params,
      ...config,
    })
  }

  post(url: string, data: any = {}, config: any = {}) {
    return this.instance({
      method: 'post',
      url,
      data: qs.stringify(data),
      ...config,
    })
  }

  request(options: AxiosRequestConfig) {
    this.instance(options)
  }
}

const { get, post, request } = new Http().instance

export { get, post, request }
