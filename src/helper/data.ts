import { isPlainObject } from './util'

export default function buildData(data: any): string | void {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
