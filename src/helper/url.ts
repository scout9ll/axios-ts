import { isDate, isObject } from 'util'
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export default function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    const value = params[key]
    let values = []
    // assert the type of value
    if (!value) {
      return
    }
    if (Array.isArray(value)) {
      key += `[]`
      values = value
    } else {
      values = [value]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(encode(key) + '=' + encode(val))
    })
  })

  let serializedParms = parts.join('&')
  if (serializedParms) {
    const hashIndex = url.indexOf('#')
    if (hashIndex > -1) {
      url = url.slice(0, hashIndex)
    }
    url += url.includes('?') ? '&' : '?'
  }
  return url + serializedParms
}
