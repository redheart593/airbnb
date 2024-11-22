import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


/** createAsyncThunk在redux-toolkit中用来处理异步逻辑，是redux-thunk在redux-toolkit的简洁版本
 * 
 *  1、如果不使用thunk或createAsyncThunk处理异步逻辑，需要在reducer中手动设置处理不同promise返回状态（判定中，成功，失败）的actioncreater
 *  还需要一个手动管理状态的函数，函数中需要将每种情况都分发相应的action，较为复杂。
 *  2、通过createAsyncThunk，其中自动生成三个action：pending、fulfilled、rejected；分别对于判定，成功，失败。不需要在reducer中手动设置，
 *  在extraReducers可以通过builder对象简易设置对三种状态返回的action的处理方式
 *  在管理状态的函数中，只需要设置成功时的操作，失败或判定在extraReducers都会处理，不需要传至管理状态的函数处理
 */
export const fetchHomeDataAction = createAsyncThunk("fetchdata", /*异步函数需要用async声明*/async () => {
    // hyRequest.get() 可以直接用封装好的axios请求，参数就是url
    // 这里考虑对请求每个url这一过程再次进行封装后拿数据
    // 这个过程本身是一个promise，可以用async，await来实现
    // getHomeGoodPriceData().then(res => {
    //     console.log(res)
    // })
    const res = await getHomeGoodPriceData() // 用于暂停异步函数的执行，等待 Promise 返回结果。暂停异步函数中代码的执行，但主线程仍会继续运行其他同步代码。
    return res
})

// 通过redux-toolkit中的createSlice直接创建包含名字，初始状态，reducer的slice，在把slice中的reducer传出到总store的reducer中
const homeSlice = createSlice({
    name: 'home',
    // 设置初始状态
    initialState: {
        // 高性价比消息
        goodPriceInfo: {}
    },
    // 设置reducer，对状态进行更改
    reducers: {
        // 更改goodPriceInfo，接收到数据就传给goodPriceInfo
        changeGoodPriceInfo(state, { payload }) {
            state.goodPriceInfo = payload
        }
    },
    // extraReducers 是一个特殊的字段，用于处理不属于 reducers 中定义的 action。
    // extraReducers 的核心思想是响应外部 action，而不是在当前 slice 中显式定义这些 action。
    extraReducers:
        // 当extraReducers被定义为函数时，Redux Toolkit自动将一个builder对象传递给它，供你配置extraReducers的逻辑。这个对象简化了对不同action的处理。 
        (builder) => {
            builder
                /** .addCase(actionCreator, reducer)
                 *  通过链式处理特定的 action 类型。通常与 createAsyncThunk 生成的 action 结合使用。
                 *  如fetchHomeDataAction.fulfilled是成功action，fetchHomeDataAction.rejected是失败action
                 */
                .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
                    // 异步操作成功
                    state.goodPriceInfo = payload; // 将返回的数据存入 state
                    console.log(payload)
                })
        }
})

// 导出reducer中更改状态的方法，是一个action creator
export const { changeGoodPriceInfo } = homeSlice.actions

export default homeSlice.reducer