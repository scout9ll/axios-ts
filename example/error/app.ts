import axios from '../../src/index'

const errRequest = () =>
  axios({
    method: 'get',
    url: '/error/timeout',
    timeout: 2000
  })
    .then(res => {
      console.log(res)
    })
    .catch(e => console.log(e.message))

axios({
  method: 'get',
  url: '/error/get',
  timeout: 2000
})
  .then(res => {
    console.log(res)
  })
  .catch(e => console.log(e.message))
setTimeout(errRequest, 5000)
setTimeout(errRequest, 0)
