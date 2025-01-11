// 把所有actoin常量都传入redrcer
import * as actionTypes from "./constants"

// 原始的redux编写方式
// 先设置一个初始化的状态存储数据
const initialState = {
    houseList: [],   // 房间列表
    totalCount: 0,  // 总数据量
    currentPage: 0,  // 当前页数
    isLoading: false    // 是否在加载
}

// 设置reducer函数，有state和action两个参数。state默认为初始化的状态,action是传过来的
function reducer(state = initialState, action) {
    // 常用做法是判断action类型来决定对state做什么操作。
    // 这里操作是返回一个新的initialState对象，其中先对state展开，包含所有state中的数据
    // 再重新改变状态中相应action类型的数据，数据会从action参数中传过来
    switch (action.type) {
        case actionTypes.CHANGE_HOUSE_LIST:
            return { ...state, houseList: action.houseList }
        case actionTypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case actionTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case actionTypes.CHANGE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

export default reducer