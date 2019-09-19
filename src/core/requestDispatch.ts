import { AxiosRequestConfig, AxiosPromise } from '../types'
import xhr from './xhr'
import buildURL from '../helper/url'
import buildData from '../helper/data'
import buildHeaders from '../helper/headers'
export default function requestDispatch(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => transformResponse(res))
}
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformData(config)
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
function transformHeaders(config: AxiosRequestConfig): object {
  const { headers = {}, data } = config
  return buildHeaders(headers, data)
}
function transformData(config: AxiosRequestConfig): any {
  const { data } = config
  return buildData(data)
}
function transformResponse(res: any): any {
  if (typeof res.data === 'string') {
    try {
      res.data = JSON.parse(res.data)
    } catch (e) {
      //do nothing
    }
  }
  return res
}
