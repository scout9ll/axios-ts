import { isDate, isObject, isPlainObject, extend } from '../../src/helper/util'

describe('helpers:util', () => {
  describe('isXX', () => {
    test('should validate date', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate(Date.now())).toBeFalsy()
    })
    test('should validate Plain object', () => {
      expect(isPlainObject(new Date())).toBeFalsy()
      expect(isPlainObject({})).toBeTruthy()
    })
    test('should validate  object', () => {
      expect(isObject(1)).toBeFalsy()
      expect(isObject(new Date())).toBeTruthy()
    })
  })
  describe('extend', () => {
    test('should be mutable', () => {
      const a = Object.create(null)
      const b = { foo: 123 }
      extend(a, b)
      expect(a.foo).toBe(123)
    })
  })
})
