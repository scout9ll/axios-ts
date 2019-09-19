import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { createError } from '../helper/error'
function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { timeout, responseType, data = null, url, method = 'get', headers } = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }
    if (timeout) {
      request.timeout = timeout
    }
    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = request.getAllResponseHeaders()
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      }
      handleResponse(response)
    }
    request.onerror = function handleError() {
      reject(createError('NETWORK ERROR', config, null, request))
    }
    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of  ${timeout}`, config, null, request))
    }
    Object.keys(headers).forEach(key => {
      if (data == null && key.toLowerCase() === 'content-type') {
        delete headers[key]
      } else {
        request.setRequestHeader(key, headers[key])
      }
    })
    request.send(data)
    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(`Request failed with status code ${response.status}`, config, null, request)
        )
      }
    }
  })
}
export default xhr
