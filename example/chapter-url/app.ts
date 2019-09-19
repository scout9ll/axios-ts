import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})
  .then(res => console.log(res.data))
  .catch(e => console.log(e.message))
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  },
  responseType: 'json'
})
  .then(res => console.log(res.data))
  .catch(e => console.log(e.message))
