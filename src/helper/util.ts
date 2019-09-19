export function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
export function isPlainObject(val: any): val is Object {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  // Object.keys(from).forEach(key => {
  //   ;(to as T & U)[key] = from[key] as any
  // })
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as any
}
