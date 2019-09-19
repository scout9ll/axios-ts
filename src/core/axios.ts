import requestDispatch from './requestDispatch'
import { AxiosRequestConfig, Method, AxiosPromise } from '../types'

export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    return requestDispatch(config)
  }
  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestWithoutData(url, 'get', config)
  }
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestWithoutData(url, 'delete', config)
  }
  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestWithoutData(url, 'head', config)
  }
  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestWithoutData(url, 'options', config)
  }
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestWithData(url, 'post', data, config)
  }
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestWithData(url, 'put', data, config)
  }
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestWithData(url, 'patch', data, config)
  }
  _requestWithoutData(url: string, method: Method, config?: AxiosRequestConfig): AxiosPromise {
    return requestDispatch(Object.assign(config || {}, { url, method }))
  }
  _requestWithData(
    url: string,
    method: Method,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise {
    return requestDispatch(Object.assign(config || {}, { url, method, data }))
  }
}
