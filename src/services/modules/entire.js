import hyRequest from ".."

// 对获得entire数据的url进行封装，其中包括参数offset和size，分别代表从第几条数据开始获取和一共获取几条数据。
// 把他们作为参数传给服务器。可以传哪些参数由后端设置
export function getEntireList(offset = 0, size = 20) {
    return hyRequest.get({
        url: "/entire/list",
        params: {
            offset,
            size
        }
    })
}