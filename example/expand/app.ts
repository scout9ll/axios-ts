import axios from '../../src/axios'
axios.get('/simple/get')
console.log(Object.keys(axios))

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}
interface User {
  name: string
  age: number
}

function getData<T = any>() {
  return axios<ResponseData<T>>('/extend/user')
}

const test = () => {
  getData<User>()
    .then(res => res.data.result.age)
    .then(res => console.log(res))
    .catch(e => console.log(e))
}

async function normalTest() {
  try {
    const usettr = await getData<User>()
    console.log(usettr.data.result.name)
  } catch (e) {
    console.log(e)
  }
}

test()
normalTest()
