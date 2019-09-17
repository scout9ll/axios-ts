import axios from '../../src/index'

axios({
  method: 'get',
  url: '/url/get',
  params: {
    foo: ['bar', 'baz']
  }
})

axios({
  method: 'get',
  url: '/url/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

const date = new Date()

axios({
  method: 'get',
  url: '/url/get',
  params: {
    date
  }
})

axios({
  method: 'get',
  url: '/url/get',
  params: {
    foo: '@:$, '
  }
})

axios({
  method: 'get',
  url: '/url/get',
  params: {
    foo: 'bar',
    baz: null
  }
})

axios({
  method: 'get',
  url: '/url/get#hash',
  params: {
    foo: 'bar'
  }
})

axios({
  method: 'get',
  url: '/url/get?foo=bar',
  params: {
    bar: 'baz'
  }
})
