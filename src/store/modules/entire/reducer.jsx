// 原始的redux编写方式
// 先设置一个初始化的状态
const initialState = {

}

// 设置reducer函数，有state和action两个参数。state默认为初始化的状态,action是传过来的
function reducer(state = initialState, action) {
    // 常用做法是判断action类型来决定对state做什么操作，返回的是一个新对象
    switch (action.type) {
        default:
            return state
    }
}

export default reducer