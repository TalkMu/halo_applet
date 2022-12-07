import request from '../utils/request'

export async function list(data){
  return request({
    url:'content/categories',
    data:data
  })
}
