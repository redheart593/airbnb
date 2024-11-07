import { createSlice } from "@reduxjs/toolkit";

// 通过redux-toolkit中的createSlice直接创建包含名字，初始状态，reducer的slice，在把slice中的reducer传出到总store的reducer中
const homeSlice = createSlice({
    name: 'home',
    initialState: {

    },
    reducers: {

    }
})

export default homeSlice.reducer