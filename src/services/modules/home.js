import hyRequest from "..";

// 将每个对不同url的请求再次进行封装
export function getHomeGoodPriceData() {
    return hyRequest.get({
        url: "/home/goodprice"
    })
}