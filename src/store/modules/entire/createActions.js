import { getEntireList } from "@/services/modules/entire"
import * as actionTypes from "./constants"


// 定义不同的actioncreator，都是返回一个对象，里边包括action类型和数据
export const changeHouseListAction = (houseList) => ({
    type: actionTypes.CHANGE_HOUSE_LIST,
    houseList   // 是houseList: houseList的简写，下同。
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

// 这里通过redux-thunk实现异步网络请求，page是传过来的参数，代表点击了第几页
export const fetchEntireListAction = (page = 0) => {
    // 这里边的两个参数是redux-thunk中的默认参数，它们使得异步 action creators 能够访问和修改 Redux state，从而实现更复杂的异步状态管理逻辑。
    /** dispatch就是派发，不需要通过useDispatch再获得
     *  getState用于获取当前 Redux store 中的 state，通常用来在异步操作中访问当前状态（例如：检查是否已经有数据、是否需要刷新等）。
     */
    return async (dispatch, getState) => {
        // 根据点击页数明确要从第几条数据开始取
        const offset = page * 20
        // 网络请求到数据
        const res = await getEntireList(offset)
        // 根据请求到的数据分别派发action，各action作用都是将请求到的数据传到state中储存
        dispatch(changeHouseListAction(res.list))
        dispatch(changeTotalCountAction(res.totalCount))
        dispatch(changeCurrentPageAction(page))
    }
}
