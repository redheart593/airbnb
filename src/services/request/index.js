import axios from "axios"
// 单独设置基础URL 和 请求超时时间再导入，方便以后修改
import { BASE_URL, TIMEOUT } from "./config"

// 定义一个类来二次封装axios，具备更强的内聚性，可以把多个东西封装到一起
class HYRequest {
    // 类中的constructor是构造函数，作用是实例化对象进行初始化,通过参数传递进行初始化
    constructor(baseURL, timeout) {
        // 每次实例化一个新的HYRequest对象，就对其中的instance属性进行初始化，创建一个axios实例赋给instance
        this.instance = axios.create({
            // 根据传来的参数设置基础URL和请求超时时间
            baseURL,
            timeout
        })


        // 通过响应拦截器拦截，将promise中的data取出来
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
    }

    // 设置request方法，参数是config，包含用于指定请求的所有参数，作用是调用instance代表的axios实例对象的request方法，返回一个promise
    request(config) {
        return this.instance.request(config)
    }

    // 设置get方法，获取服务器的数据。这里有相应拦截器的作用，得到的就是promise中的data
    get(config) {
        return this.instance.request({ ...config, method: "get" })
    }

    // 设置post方法，向服务器提交数据
    post(config) {
        return this.instance.request({ ...config, method: "get" })
    }
}


// 导出一个类的实例对象,将 基础URL 和 请求超时时间 传进去
export default new HYRequest(BASE_URL, TIMEOUT)