import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch, getState }) => {
  // const state = getState()
  // state.xxx
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    }
  }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions

export default homeSlice.reducer
