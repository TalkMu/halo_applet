import request from "../utils/request";

export async function list(data) {
  return request({
    url: "content/posts",
    data: data
  })
}

export async function detail(postId){
  return request({
    url:"content/posts/" + postId
  })
}
