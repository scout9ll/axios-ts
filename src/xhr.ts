import { AxiosRequestConfig } from './types'

function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  Object.keys(headers).forEach(key => {
    if (data == null && key.toLowerCase() === 'content-type') {
      delete headers[key]
    } else {
      request.setRequestHeader(key, headers[key])
    }
  })
  request.send(data)
}
export default xhr
