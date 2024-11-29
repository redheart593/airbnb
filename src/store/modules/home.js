import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


/** createAsyncThunk在redux-toolkit中用来处理异步逻辑，是redux-thunk在redux-toolkit的简洁版本
 * 
 *  1、如果不使用thunk或createAsyncThunk处理异步逻辑，需要在reducer中手动设置处理不同promise返回状态（判定中，成功，失败）的actioncreater
 *  还需要一个手动管理状态的函数，函数中需要将每种情况都分发相应的action，较为复杂。
 *  2、通过createAsyncThunk，其中自动生成三个action：pending、fulfilled、rejected；分别对于判定，成功，失败。不需要在reducer中手动设置，
 *  在extraReducers可以通过builder对象简易设置对三种状态返回的action的处理方式
 *  在管理状态的函数中，只需要设置成功时的操作，失败或判定在extraReducers都会处理，不需要传至管理状态的函数处理
 */
export const fetchHomeDataAction = createAsyncThunk("fetchdata", /*如果使用extraReducers就必须要返回一个异步promise,需要用async声明*/
    // 1、hyRequest.get() 可以直接用封装好的axios请求，参数就是url

    // 2、这里考虑对请求每个url这一过程再次进行封装后拿数据
    // getHomeGoodPriceData().then(res => {
    //     console.log(res)
    // })
    // 这个过程本身是一个promise，可以用async，await来实现
    // const res = await getHomeGoodPriceData() // await用于暂停异步函数的执行，等待 Promise 返回结果。暂停异步函数中代码的执行，但主线程仍会继续运行其他同步代码。
    // return res

    // 3、考虑在createAsyncThunk中处理多个api返回的数据，这样数据传递的过程就不能放在extraReducers里执行了，只能在这个内部执行

    /**
     * 1、先将所有api函数和action creator放在一个数组里，对数组进行遍历
     * 2、每次遍历都调用一次api函数来获取数据
     * 3、如果获取数据成功就将数据dispatch给相应的action creator，把数据传给相应的状态
     * 4、如果失败就在控制台输出一个error
     */
    async (payload, { dispatch }) => {
        const requestMap = [
            { api: getHomeGoodPriceData, action: changeGoodPriceInfo },
            { api: getHomeHighScoreData, action: changeHighScoreInfo },
            { api: getHomeDiscountData, action: changeDiscountInfo },
            { api: getHomeHotRecommendData, action: changeRecommendInfo },
            { api: getHomeLongforData, action: changeLongforInfo },
            { api: getHomePlusData, action: changePlusInfo },
        ];

        // 为每个请求独立处理
        requestMap.forEach(({ api, action }) => {
            api()
                .then((data) => {
                    dispatch(action(data)); // 单个请求返回后立即派发
                })
                .catch((error) => {
                    console.error(`Error fetching data`, error);
                });
        });
    }
)

// 通过redux-toolkit中的createSlice直接创建包含名字，初始状态，reducer的slice，在把slice中的reducer传出到总store的reducer中
const homeSlice = createSlice({
    name: 'home',
    // 设置初始状态
    initialState: {
        // 高性价比数据
        goodPriceInfo: {},
        // 高分数据
        highScoreInfo: {},
        // 折扣数据
        discountInfo: {},
        // 推荐数据
        recommendInfo: {},
        // 等待数据
        longforInfo: {},
        // 更多数据
        plusInfo: {}
    },
    // 设置reducer，对状态进行更改
    reducers: {
        // 更改goodPriceInfo，接收到数据就传给goodPriceInfo 其余actioncreator原理相同
        changeGoodPriceInfo(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfo(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfo(state, { payload }) {
            state.discountInfo = payload
        },
        changeRecommendInfo(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfo(state, { payload }) {
            state.longforInfo = payload
        },
        changePlusInfo(state, { payload }) {
            state.plusInfo = payload
        }
    },
    // extraReducers 是一个特殊的字段，用于处理不属于 reducers 中定义的 action。
    // extraReducers 的核心思想是响应外部 action，而不是在当前 slice 中显式定义这些 action。
    // extraReducers:
    //     // 当extraReducers被定义为函数时，Redux Toolkit自动将一个builder对象传递给它，供你配置extraReducers的逻辑。这个对象简化了对不同action的处理。 
    //     (builder) => {
    //         builder
    //             /** .addCase(actionCreator, reducer)
    //              *  通过链式处理特定的 action 类型。通常与 createAsyncThunk 生成的 action 结合使用，参数分别是createAsyncThun函数和自己reducer中的状态和payload。
    //              *  如fetchHomeDataAction.fulfilled是成功action，fetchHomeDataAction.rejected是失败action
    //              */
    //             .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {    // payload是fetchHomeDataAction返回的数据
    //                 // 异步操作成功
    //                 state.goodPriceInfo = payload; // 将返回的数据存入 state
    //                 console.log(payload)
    //             })
    //     }

    // 当处理单个api时，可以在extraReducers中进行直接给状态传递数据，不徐要dispatch，较为简便。但此处有多个api，所以只能在fetchHomeDataAction中各个promise各自处理，所以不需要使用。
})

// 导出reducer中更改状态的方法，是一个action creator
export const { changeGoodPriceInfo,
    changeHighScoreInfo,
    changeDiscountInfo,
    changeRecommendInfo,
    changeLongforInfo,
    changePlusInfo
} = homeSlice.actions

export default homeSlice.reducer