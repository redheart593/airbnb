import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// 通过redux-toolkit中的createSlice直接创建包含名字，初始状态，reducer的slice，在把slice中的reducer传出到总store的reducer中
const detailSlice = createSlice({
    name: 'detail',
    // 设置初始状态,数据为要传递到详情页的数据
    initialState: {
        detailInfo: {}
    },
    // 设置reducer，对状态进行更改
    reducers: {
        changedetailInfo(state, { payload }) {
            state.detailInfo = payload
        }
    },
})

// 导出reducer中更改状态的方法，是一个action creator
export const {
    changedetailInfo
} = detailSlice.actions

export default detailSlice.reducer