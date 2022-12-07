import Taro from '@tarojs/taro';

const BASE_URL = "https://blog.koolss.com/api/"

export default async function request(options){
  const { url, data, method = 'GET'} = options
  const token = {
    "API-Authorization":"LTAIMV2u3ivcFN0n"
  }
  const header = token
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }
  const url_full = BASE_URL + url;

  return Taro.request({
    url:url_full,
    method,
    data: data,
    header
  }).then(async (res) => {
    return res
  }).catch((err) => {
    return err;
  })
}
