// 导出isEmptyO函数，当传进来的数据有值时，对象的keys有长度
export const isEmptyO = (obj) => {
    // !!语法将长度转换为布尔值
    return !!Object.keys(obj).length
}