import axios from "axios";
import { BASE_URL, TMIEOUT } from "./config";

// const request = axios.create({
//   baseURL: BASE_URL,
//   timeout: TMIEOUT
// })
// //请求拦截器,在发送之前
// request.interceptors.request.use((res => {
//   return res
// }), err => { return console.log(err); })
// //响应截器，在相应返回到客户端之前，拦截，处理返回的数据。
// request.interceptors.response.use((response => {
//   return response.data
// }), err => { return console.log(err); })
class request {
  constructor(BASE_URL, TMIEOUT) {
    this.axiosData = axios.create({
      baseURL: BASE_URL,
      timeout: TMIEOUT
    })
    this.axiosData.interceptors.request.use((res) => {
      return res.data//后面就不用在写.data
    }, err => err)
  }
  request(config) {
    return this.axiosData.request(config)
  }
  get(config) {
    return this.request({ ...config, method: "get" })
  }
  post(config) {
    return this.request({ ...config, method: "post" })
  }
}
export default new request(BASE_URL, TMIEOUT)